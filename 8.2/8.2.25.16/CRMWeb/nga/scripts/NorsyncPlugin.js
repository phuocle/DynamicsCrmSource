//
// This file must be consistent with NorsyncPlugin.js in Shims for IOS,Android and Windows
//

(function () {
	var SQLitePlugin, SQLitePluginTransaction, get_unique_id, root, transaction_callback_queue, transaction_queue, syncRecall, syncTimeout;
	root = this;
	//FIXME: We should come up with a way to supply the cordova instance from outside, so that this file can stay generic
	var defaultErrorCode = -100;
	var databaseDoesNotOpenErrorCode = -101;

	var cdv = Microsoft.Crm.Client.Core.Framework.PAL.Core.NativeBridge.get_Instance().get_Cordova();
	var sqlitePluginRunning = false;
	SQLitePlugin = function (dbPath, openSuccess, openError) {
		var _this = this;
		_this.getDefaultSyncRecallCount(function (recallCount) { _this.syncRecall = recallCount; });
		_this.getDefaultSyncRecallTimeout(function (recallTimeout) { _this.syncTimeout = recallTimeout; });
		this.dbPath = dbPath;
		this.openSuccess = openSuccess;
		this.openError = openError;
		if (!dbPath) {
			return openError("Cannot create a SQLitePlugin instance without a dbPath");
		}
		if (!this.openSuccess) {
			this.openSuccess = function () {
				return console.log("DB opened: " + dbPath);
			};
		}

		if (!this.openError) {
			this.openError = function (e) {
				return console.log("Error openening DB: " + e.message);
			};
		}
		this.open(this.openSuccess, this.openError);
	};
	SQLitePlugin.prototype.openDBs = {};
	SQLitePlugin.prototype.transaction = function (fn, error, success) {
		var t;
		t = new SQLitePluginTransaction(this.dbPath);
		fn(t);
		return t.complete(success, error);
	};
	SQLitePlugin.prototype.open = function (success, error) {
		var opts;
		opts = void 0;
		if (!(this.dbPath in this.openDBs)) {
			this.openDBs[this.dbPath] = true;
			//return cdv.exec(success, error, "SQLitePlugin", "open", {dbName: this.dbPath});
		}
		else { // we already have this db open
			//return cdv.exec(success, error, "SQLitePlugin", "open", {dbName: this.dbPath});
		}
		cdv.exec(success, error, "SQLiteSyncDatabasePlugin", "open", [this.dbPath]);
	};
	SQLitePlugin.prototype.close = function (success, error) {
		var opts;
		opts = void 0;
		if (this.dbPath in this.openDBs) {
			delete this.openDBs[this.dbPath];
			return cdv.exec(success, error, "SQLiteSyncDatabasePlugin", "close", [this.dbPath]);
		}
	};

	checkErrorCallback = function (e, errorCode) {
		if (typeof e === 'string' || e instanceof String) {
			return {
				type: "error-callback",
				code: errorCode,
				message: e
			};
		} else {
			return e;
		}
	};

	checkCallbackArgument = function (arg) {
		try {
			arg = JSON.parse(arg);
		} catch (ex) {
			// DO NOTHING
			// Sometimes we use argument as JSON and sometemes as string
			// if arg is a valid json we parse and return with the object
			// if not we return the original argument
		}

		return arg;
	}

	getOnSyncCompletedObj = function (r) {
	    r.type = "on-sync-complete";
	    r.code = 4;
	    r.message = "Update finished with failure";
	    return r;
	};

	get_unique_id = function () {
		var id, id2;
		id = new Date().getTime();
		id2 = new Date().getTime();
		while (id === id2) {
			id2 = new Date().getTime();
		}
		return id2 + "000";
	};
	transaction_queue = [];
	transaction_callback_queue = {};
	SQLitePluginTransaction = function (dbPath) {
		this.dbPath = dbPath;
		this.executes = [];
		this.trans_id = get_unique_id();
		this.__completed = false;
		this.__submitted = false;
		transaction_queue[this.trans_id] = [];
		transaction_callback_queue[this.trans_id] = new Object();
	};
	SQLitePluginTransaction.queryCompleteCallback = function (transId, queryId, result) {
		var query, x;
		query = null;
		var trans;
		if (queryId) {
			for (x in transaction_queue[transId]) {
				if (transaction_queue[transId][x]["query_id"] === queryId) {
					query = transaction_queue[transId][x];
					if (transaction_queue[transId].length === 1) {
						transaction_queue[transId] = [];
					}
					else {
						transaction_queue[transId].splice(x, 1);
					}
					break;
				}
			}
		}
		if (queryId && query && query["callback"]) {
			return query["callback"](result);
		}
	};
	SQLitePluginTransaction.queryErrorCallback = function (transId, queryId, result) {
		var query, x;
		query = null;
		for (x in transaction_queue[transId]) {
			if (transaction_queue[transId][x]["query_id"] === queryId) {
				query = transaction_queue[transId][x];
				if (transaction_queue[transId].length === 1) {
					transaction_queue[transId] = [];
				} else {
					transaction_queue[transId].splice(x, 1);
				}
				break;
			}
		}
		if (query && query["err_callback"]) return query["err_callback"](result);
	};
	SQLitePluginTransaction.escapeJSONVal = function (str) {
		return str
		  .replace(/[\\]/g, '\\\\')
		  .replace(/[\"]/g, '\\\"')
		  .replace(/[\/]/g, '\\/')
		  .replace(/[\b]/g, '\\b')
		  .replace(/[\f]/g, '\\f')
		  .replace(/[\n]/g, '\\n')
		  .replace(/[\r]/g, '\\r')
		  .replace(/[\t]/g, '\\t');
	};
	//-- makes the reslts that come from cordova into results thar resemble the websql results
	SQLitePluginTransaction.fixQueryResult = function (resultColumns) {
		//make a JSON string then turn it back to an object, since we cannot have dynamic varable names I don't see any other way to do this
		var newResults = "[";
		var columNum = 0;
		var temp = '';
		var tempObj = '';
		for (var x in resultColumns) {
			if (newResults !== "[")
				newResults += ",{";
			else
				newResults += "{";

			columNum = 0;
			for (var y in resultColumns[x].column) {
				if (columNum > 0)
					newResults += ",";

				if (typeof resultColumns[x].column[y].Value == 'string')
					newResults += '"' + resultColumns[x].column[y].Key.replace("\"", "\\\"") + '":"' + SQLitePluginTransaction.escapeJSONVal(resultColumns[x].column[y].Value) + '"';
				else
					newResults += '"' + resultColumns[x].column[y].Key.replace("\"", "\\\"") + '":' + resultColumns[x].column[y].Value + '';

				columNum++;
			}
			newResults += "}";
		}
		newResults += "]";
		return JSON.parse(newResults);
	}
	SQLitePluginTransaction.txCompleteCallback = function (result, success) {
		var transId = result.transId;
		var queryId = null;
		var queryResult = null;
		for (var x in result.results) {
			queryId = result.results[x].queryId;
			queryResult = result.results[x].result;
			if (queryId) {
				SQLitePluginTransaction.queryCompleteCallback(transId, queryId, SQLitePluginTransaction.fixQueryResult(queryResult));
			}
		}

		if (success) {
			return success();
		}
	};
	SQLitePluginTransaction.txErrorCallback = function (transId, error) {
		if (typeof transId !== "undefined") {
			if (transId && transaction_callback_queue[transId]["error"]) {
				transaction_callback_queue[transId]["error"](error);
			}
			delete transaction_queue[transId];
			return delete transaction_callback_queue[transId];
		}
	};
	SQLitePluginTransaction.prototype.add_to_transaction = function (trans_id, query, params, callback, err_callback) {
		var new_query;
		new_query = new Object();
		new_query["trans_id"] = trans_id;
		if (callback) {
			new_query["query_id"] = get_unique_id();
		} else {
			new_query["query_id"] = "";
		}
		new_query["query"] = query;
		if (params) {
			new_query["params"] = params;
		} else {
			new_query["params"] = [];
		}
		new_query["callback"] = callback;
		new_query["err_callback"] = err_callback;
		if (!transaction_queue[trans_id])
			transaction_queue[trans_id] = [];

		return transaction_queue[trans_id].push(new_query);
	};
	SQLitePluginTransaction.prototype.executeSql = function (sql, values, success, error) {
		var errorcb, successcb, txself;
		errorcb = void 0;
		successcb = void 0;
		txself = void 0;
		txself = this;
		successcb = null;
		if (success) {
			successcb = function (execres) {
				var res, saveres;
				res = void 0;
				saveres = void 0;
				saveres = execres;
				res = {
					rows: {
						item: function (i) {
							return saveres[i];
						},
						length: saveres.length
					},
					rowsAffected: saveres.rowsAffected,
					insertId: saveres.insertId || null
				};
				return success(txself, res);
			};
		}
		errorcb = null;
		if (error) {
			errorcb = function (res) {
				return error(res, txself);
			};
		}
		return this.add_to_transaction(this.trans_id, sql, values, successcb, errorcb);
	};
	SQLitePluginTransaction.prototype.complete = function (success, error) {
		var begin_opts, commit_opts, errorcb, executes, opts, successcb, txself;
		var _this = this;
		txself = this;
		if (sqlitePluginRunning) {
			setTimeout(function () {
				txself.complete(success, error);
			}, 5);
		}
		else {
			sqlitePluginRunning = true;
			begin_opts = void 0;
			commit_opts = void 0;
			errorcb = void 0;
			executes = void 0;
			opts = void 0;
			successcb = void 0;
			txself = void 0;
			if (this.__completed) throw new Error("Transaction already run");
			if (this.__submitted) throw new Error("Transaction already submitted");
			this.__submitted = true;
			txself = this;
			errorcb = function (res) { };
			if (error) {
				errorcb = function (res) {
					sqlitePluginRunning = false;
					return error(txself, res);
				};
			}

			successcb = function (result) {
				sqlitePluginRunning = false;
				result = checkCallbackArgument(result);
				SQLitePluginTransaction.txCompleteCallback(result, success);
			}
			return cdv.exec(successcb, errorcb, "SQLiteSyncDatabasePlugin", "executeSqlBatch",
					[JSON.stringify({
						dbargs:{dbname: _this.dbPath},
						executes: transaction_queue[this.trans_id]
					})]
			);
		}
	};

	/**
	** Extended plugin with synchronize functions
	**/

	/**
	* Override the original SQLitePlugin open function to do nothing
	*/
	SQLitePlugin.prototype.open = function (success, error) {
		// DO NOTHING!
	}

	/**
	* Override the original SQLitePlugin close function to do nothing
	*/
	SQLitePlugin.prototype.close = function (success, error) {
		// DO NOTHING!
	}

	/**
	* Login function
	* 
	* @param name    db name
	* @param user    user name
	* @param pass    user password
	* @param host    db host
	* @param port    db port
	* @param dbpath  db file path
	* @param success callback function on success login
	* @param error   callback function on login error
	* @param serverDBname  database name on the server default = ""
	* @param modelName 	database model name default = ""
	* @param modelVersion 	database model version default = -1
	* @param accessToken the accessToken, default is ""
	* @param sessionId moca session id
	*/
	SQLitePlugin.prototype.login = function (name, user, pass, host, port, dbpath, isssl, success, error, serverDBname, modelName, modelVersion, accessToken, sessionId) {
		var serverDBname = typeof serverDBname == 'undefined' ? "" : serverDBname;
		var modelName = typeof modelName == 'undefined' ? "" : modelName;
		var modelVersion = typeof modelVersion == 'undefined' ? -1 : modelVersion;
		var accessToken = typeof accessToken == 'undefined' ? "" : accessToken;
		var sessionId = typeof sessionId == 'undefined' ? "" : sessionId;

		var _this = this;
		var myerror, mysuccess;
		mysuccess = function () {
			_this.dbPath = name;
			_this.openDBs[name] = true;
			console.log("login: " + name);
			if (!!success) {
				return success();
			}
		};
		myerror = function (e) {
			if (!!error) {
				console.log("login return error");
				var errorObject = checkErrorCallback(e, defaultErrorCode);
				return error(errorObject);
			}
		};
		if (!(name in this.openDBs)) {
			cdv.exec
				(
					mysuccess,
					myerror,
					"SQLiteSyncDatabasePlugin",
					"login",
					[name, user, pass, host, port, dbpath, isssl, serverDBname, modelName, modelVersion, accessToken, sessionId]
				);
		} else {
			_this.logout(name, function () {
				_this.login(name, user, pass, host, port, dbpath, isssl, success, error, serverDBname, modelName, modelVersion, accessToken, sessionId);
			});
		}
	};

	SQLitePlugin.prototype.logout = function (name, success) {
		var _this = this;
		var mysuccess;
		mysuccess = function () {
			delete _this.openDBs[name];
			_this.dbname = null;
			if (!!success) {
				return success();
			}
		};
		if ((name in this.openDBs)) {
			cdv.exec(mysuccess, null, "SQLiteSyncDatabasePlugin", "logout", [name]);
		} else {
			if (!!success) {
				return success();
			}
		}
	};


	/**
	* Delete database and call logout and abort
	* @param dbname database name
	* @param success    callback function on sync success
	* @param error    callback function on sync error
	*/
	SQLitePlugin.prototype.deleteDatabase = function (dbName, success, error) {
		var _this = this;
		var myerror;
		var mysuccess;
		mysuccess = function () {
			delete _this.openDBs[name];
			_this.dbname = null;
			if (!!success) {
				return success();
			}
		};

		myerror = function (e) {
			if (!!error) {
				e = checkCallbackArgument(e);
				var errorObject = checkErrorCallback(e, defaultErrorCode);
				return error(errorObject);
			}
		};

		if (dbName in this.openDBs) {
			cdv.exec(mysuccess, myerror, "SQLiteSyncDatabasePlugin", "deleteDatabase", [dbName]);
		} else {
			if (!!error) {
				return error(checkErrorCallback("Database does not open!", databaseDoesNotOpenErrorCode));
			}
		}
	};

	/**
	* Set the opened database after a page redirection
	* 
	* @param name opened database name
	*/
	SQLitePlugin.prototype.setOpenDatabase = function (name) {
		this.dbPath = name;
		this.openDBs[name] = true;
	}

	/**
	* Synchronize the current opened database
	* 
	* @param message  callback function on successfully finished sync
	* @param progress callback function on progress sync
	* @param error    callback function on sync error
	* @param modelVersion    the model version, default is -1
	* @param syncProperties    the sync properties
	 */
	SQLitePlugin.prototype.synchronize = function (message, progress, error, modelVersion, beforeModelChange, syncProperties) {
		var _this = this;
		var myerror, mysuccess;
		modelVersion = typeof modelVersion == 'undefined' ? -1 : modelVersion;
		if (!!beforeModelChange && modelVersion == -1) {
			modelVersion = 0;
		}

		mysuccess = function (r) {
			r = checkCallbackArgument(r);

			if ("on-sync-complete" == r.type) {
				if (!!progress) {
					return progress(r);
				}
			} else if ("on-progress-update" == r.type) {
				if (!!progress) {
					return progress(r);
				}
			} else if ("message-callback" == r.type) {
				if (!!message) {
					return message(r);
				}
			}
		};
		myerror = function (e) {
			e = checkCallbackArgument(e);

			if (e.code == -19) {
				if (!!beforeModelChange) {
					var json = checkCallbackArgument(e.json);

					if (typeof json.model == 'undefined') {
						if (!!error) {
							var errorObject = checkErrorCallback("cannot call beforeModelChange: model is undefined", -19);
							return error(errorObject);
						}
					}
					if (typeof json.modelVersion == 'undefined') {
						if (!!error) {
							var errorObject = checkErrorCallback("cannot recall sync: model version is undefined", -19);
							return error(errorObject);
						}
					}
					if (beforeModelChange(json.model)) {
						_this.synchronize(message, progress, error, json.modelVersion, beforeModelChange, syncProperties);
					}
				} else {
					if (!!error) {
						var errorObject = checkErrorCallback("beforeModelChange is undefined", -19);
						return error(errorObject);
					}
				}
			} else if (e.code == -20) {
				if (_this.syncRecall > 0) {
					_this.syncRecall--;
					setTimeout(function () {
					    _this.synchronize(message, progress, error, modelVersion, beforeModelChange, syncProperties);
					}, _this.syncTimeout);
				} else {
					_this.getDefaultSyncRecallCount(function (recallCount) { _this.syncRecall = recallCount; });
					if (!!error) {
						var errorObject = checkErrorCallback(e, defaultErrorCode);
						return error(errorObject);
					}
				}
			} else if (e.code == -26) {
				_this.logout(_this.dbPath, function () {
					if (!!error) {
						error(checkErrorCallback(e, defaultErrorCode));
						return error(getOnSyncCompletedObj(e));
					}
				});
			} else if (e.code == -35) {
				if (!!error) {
					var syncCompletedObj = getOnSyncCompletedObj(e);
					syncCompletedObj.code = -35;
					return error(syncCompletedObj);
				}
			} else {
				if (!!error) {
					error(checkErrorCallback(e, defaultErrorCode));
					return error(getOnSyncCompletedObj(e));
				}
			}
		};

		if (this.dbPath in this.openDBs) {
			cdv.exec(mysuccess, myerror, "SQLiteSyncDatabasePlugin", "synchronizeDatabase", [this.dbPath, modelVersion, JSON.stringify(syncProperties)]);
		} else {
			if (!!error) {
				return error(checkErrorCallback("Database does not open!", databaseDoesNotOpenErrorCode));
			}
		}
	};

	/**
	* Auto synchronize on the current opened database
	*
	* @param dbName     the database name
	* @param timeOut    the sync frequency
	* @param error      callback function on sync error
	*/
	SQLitePlugin.prototype.autosynchronize = function (dbName, timeOut, progress, error) {

		var myerror;
		var mysuccess;

		mysuccess = function (r) {
			r = checkCallbackArgument(r);
			if ("on-sync-complete" == r.type) {
				if (!!progress) {
					return progress(r);
				}
			} else if ("on-progress-update" == r.type) {
				if (!!progress) {
					return progress(r);
				}
			} else if ("message-callback" == r.type) {
				if (!!message) {
					return message(r);
				}
			}
		};

		myerror = function (e) {
			if (!!error) {
				e = checkCallbackArgument(e);
				console.log(e.type);
				var errorObject = checkErrorCallback(e, defaultErrorCode);
				return error(errorObject);
			}
		};

		if (dbName in this.openDBs) {
			cdv.exec(mysuccess, myerror, "SQLiteSyncDatabasePlugin", "autoSyncDatabase", [dbName, timeOut]);
		} else {
			if (!!error) {
				return error(checkErrorCallback("Database does not open!", databaseDoesNotOpenErrorCode));
			}
		}
	};

	/**
	* Stops auto synchronize on the current opened database
	*
	* @param dbName the name of the db
	*
	* There is no callbacks, if the database is opened stop
	* auto syncing.
	*/
	SQLitePlugin.prototype.stopAutosynch = function (dbName) {

		if (dbName in this.openDBs) {
			cdv.exec(null, null, "SQLiteSyncDatabasePlugin", "stopAutosynch", [dbName]);
		}

	};

	/**
	* Refresh the current opened database
	* 
	* @param message  callback function on successfully finished sync
	* @param progress callback function on progress sync
	* @param error    callback function on sync error
	*/
	SQLitePlugin.prototype.refresh = function (message, progress, error) {
		var myerror, mysuccess;
		mysuccess = function (r) {
			r = checkCallbackArgument(r);
			if ("on-sync-complete" == r.type) {
				if (!!progress) {
					return progress(r);
				}
			} else if ("on-progress-update" == r.type) {
				if (!!progress) {
					return progress(r);
				}
			} else if ("message-callback" == r.type) {
				if (!!message) {
					return message(r);
				}
			}

		};
		myerror = function (e) {
			if (!!error) {
				console.log('myerror start');
				console.log("synchronize error: " + e);
				e = checkCallbackArgument(e);
				if (!!error) {
					var errorObject = checkErrorCallback(e, defaultErrorCode);
					return error(errorObject);
				}
			}
		};
		if (this.dbPath in this.openDBs) {
			console.log('dbname: ' + this.dbPath);
			cdv.exec(mysuccess, myerror, "SQLiteSyncDatabasePlugin", "refreshDatabase", [this.dbPath]);
		} else {
			if (!!error) {
				return error(checkErrorCallback("Database does not open!", databaseDoesNotOpenErrorCode));
			}
		}
	};

	/**
	* Get the current synchronization status
	* 
	* @param success callback function what return with the current sync status
	*/
	SQLitePlugin.prototype.getSynchronizationStatus = function (success) {
		var mysuccess;
		mysuccess = function (r) {
			console.log("getSynchronizationStatus success: " + r.message);
			if (!!success) {
				return success(r);
			}
		};
		cdv.exec(mysuccess, null, "SQLiteSyncDatabasePlugin", "getSynchronizationStatus", []);
	};

	SQLitePlugin.prototype.refreshContext = function (dbName, error) {
		var myerror;
		myerror = function (e) {
			if (!!error) {
				e = checkCallbackArgument(e);
				var errorObject = checkErrorCallback(e, defaultErrorCode);
				return error(errorObject);
			}
		};
		cdv.exec(null, myerror, "SQLiteSyncDatabasePlugin", "refreshContext", [dbName]);
	};

	/**
	* Abort the current synchronization
	* 
	* @param success callback on success abort
	* @param error   callback on abort error
	* @param isFullAbort abort all sync operations in databaseQueue if true, else only current database sync is aborted
	*/
	SQLitePlugin.prototype.abort = function (success, error, isFullAbort) {
		if (typeof isFullAbort == 'undefined') {
			isFullAbort = false;
		}
		var myerror, mysuccess;
		mysuccess = function () {
			console.log("abort success");
			if (!!success) {
				return success();
			}
		};
		myerror = function (e) {
			console.log("abort error");
			if (!!error) {
				var errorObject = checkErrorCallback(e, defaultErrorCode);
				return error(errorObject);
			}
		};
		if (isFullAbort) {
			cdv.exec(mysuccess, myerror, "SQLiteSyncDatabasePlugin", "abortSynchronization", ["", isFullAbort]);
		} else if (this.dbPath in this.openDBs) {
			cdv.exec(mysuccess, myerror, "SQLiteSyncDatabasePlugin", "abortSynchronization", [this.dbPath, isFullAbort]);
		} else {
			if (!!error) {
				return error(checkErrorCallback("Database does not open!", databaseDoesNotOpenErrorCode));
			}
		}
	};

	/**
	* Generates a random UUID
	*/
	SQLitePlugin.prototype.generateUUID = function (success, n) {
		n = typeof n == 'undefined' ? 1 : n;
		var mysuccess;
		mysuccess = function (r) {
			if (!!success) {
				if (n != 1) {
					r = typeof r == 'string' ? JSON.parse(r) : r;
				}
				return success(r);
			}
		};
		cdv.exec(mysuccess, null, "SQLiteSyncDatabasePlugin", "generateUUID", [n]);
	};

	/**
	 * Generates a random getDefaultSyncRecallCount
	 */
	SQLitePlugin.prototype.getDefaultSyncRecallCount = function (success) {
		var mysuccess;
		mysuccess = function (r) {
			if (!!success) {
				return success(r);
			}
		};
		cdv.exec(mysuccess, null, "SQLiteSyncDatabasePlugin", "getDefaultSyncRecallCount", []);
	};

	/**
	 * Generates a random getDefaultSyncRecallTimeout
	 */
	SQLitePlugin.prototype.getDefaultSyncRecallTimeout = function (success) {
		var mysuccess;
		mysuccess = function (r) {
			if (!!success) {
				return success(r);
			}
		};
		cdv.exec(mysuccess, null, "SQLiteSyncDatabasePlugin", "getDefaultSyncRecallTimeout", []);
	};

	/* Extension end */

	root.SQLitePluginTransaction = SQLitePluginTransaction;
	return root.norsyncPlugin = {
		init: function (dbname) {
			openargs = {
				name: dbname
			};
			return new SQLitePlugin(dbname, null, null);
		}
	};
}).call(this);