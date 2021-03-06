Type.registerNamespace("Wall.Interfaces");
Wall.Interfaces.IComment = function() {};
Wall.Interfaces.IComment.registerInterface("Wall.Interfaces.IComment");
Wall.Interfaces.ICreateCommentResponse = function() {};
Wall.Interfaces.ICreateCommentResponse.registerInterface("Wall.Interfaces.ICreateCommentResponse");
Wall.Interfaces.ICreateLikeResponse = function() {};
Wall.Interfaces.ICreateLikeResponse.registerInterface("Wall.Interfaces.ICreateLikeResponse");
Wall.Interfaces.ICreatePostResponse = function() {};
Wall.Interfaces.ICreatePostResponse.registerInterface("Wall.Interfaces.ICreatePostResponse");
Wall.Interfaces.IDeleteCommentResponse = function() {};
Wall.Interfaces.IDeleteCommentResponse.registerInterface("Wall.Interfaces.IDeleteCommentResponse");
Wall.Interfaces.IDeleteLikeResponse = function() {};
Wall.Interfaces.IDeleteLikeResponse.registerInterface("Wall.Interfaces.IDeleteLikeResponse");
Wall.Interfaces.IDeletePostResponse = function() {};
Wall.Interfaces.IDeletePostResponse.registerInterface("Wall.Interfaces.IDeletePostResponse");
Wall.Interfaces.IEntityReference = function() {};
Wall.Interfaces.IEntityReference.registerInterface("Wall.Interfaces.IEntityReference");
Wall.Interfaces.IPost = function() {};
Wall.Interfaces.IPost.registerInterface("Wall.Interfaces.IPost");
Wall.Interfaces.IPostResponse = function() {};
Wall.Interfaces.IPostResponse.registerInterface("Wall.Interfaces.IPostResponse");
Wall.Interfaces.IRetrieveCommentsRequest = function() {};
Wall.Interfaces.IRetrieveCommentsRequest.registerInterface("Wall.Interfaces.IRetrieveCommentsRequest");
Wall.Interfaces.IRetrieveCommentsResponse = function() {};
Wall.Interfaces.IRetrieveCommentsResponse.registerInterface("Wall.Interfaces.IRetrieveCommentsResponse");
Wall.Interfaces.IRetrieveWallFiltersResponse = function() {};
Wall.Interfaces.IRetrieveWallFiltersResponse.registerInterface("Wall.Interfaces.IRetrieveWallFiltersResponse");
Wall.Interfaces.IRetrieveLikesRequest = function() {};
Wall.Interfaces.IRetrieveLikesRequest.registerInterface("Wall.Interfaces.IRetrieveLikesRequest");
Wall.Interfaces.IRetrieveLikesResponse = function() {};
Wall.Interfaces.IRetrieveLikesResponse.registerInterface("Wall.Interfaces.IRetrieveLikesResponse");
Wall.Interfaces.IRetrievePostsRequest = function() {};
Wall.Interfaces.IRetrievePostsRequest.registerInterface("Wall.Interfaces.IRetrievePostsRequest");
Wall.Interfaces.IRetrievePostsResponse = function() {};
Wall.Interfaces.IRetrievePostsResponse.registerInterface("Wall.Interfaces.IRetrievePostsResponse");
Wall.Interfaces.ISetDefaultFilterResponse = function() {};
Wall.Interfaces.ISetDefaultFilterResponse.registerInterface("Wall.Interfaces.ISetDefaultFilterResponse");
Wall.Interfaces.ISystemUser = function() {};
Wall.Interfaces.ISystemUser.registerInterface("Wall.Interfaces.ISystemUser");
Wall.Interfaces.IWall = function() {};
Wall.Interfaces.IWall.registerInterface("Wall.Interfaces.IWall");
Wall.Interfaces.IWallAction = function() {};
Wall.Interfaces.IWallAction.registerInterface("Wall.Interfaces.IWallAction");
Wall.Interfaces.IWallFilter = function() {};
Wall.Interfaces.IWallFilter.registerInterface("Wall.Interfaces.IWallFilter");
Wall.Interfaces.IWallService = function() {};
Wall.Interfaces.IWallService.registerInterface("Wall.Interfaces.IWallService");
Wall.Interfaces.IWallServiceFactory = function() {};
Wall.Interfaces.IWallServiceFactory.registerInterface("Wall.Interfaces.IWallServiceFactory");
Type.registerNamespace("Wall.Interfaces.EventArguments");
Wall.Interfaces.EventArguments.CommentCreatedEventArgs = function(comment) {
    Wall.Interfaces.EventArguments.CommentCreatedEventArgs.initializeBase(this);
    this.$2_1 = comment
};
Wall.Interfaces.EventArguments.CommentCreatedEventArgs
    .prototype = { $2_1: null, get_comment: function() { return this.$2_1 } };
Wall.Interfaces.EventArguments.CommentDeletedEventArgs = function(commentId) {
    Wall.Interfaces.EventArguments.CommentDeletedEventArgs.initializeBase(this);
    this.$3_1 = commentId
};
Wall.Interfaces.EventArguments.CommentDeletedEventArgs
    .prototype = { $3_1: null, get_commentId: function() { return this.$3_1 } };
Wall.Interfaces.EventArguments.CommentsRefreshedEventArgs = function(comments) {
    Wall.Interfaces.EventArguments.CommentsRefreshedEventArgs.initializeBase(this);
    this.$4_1 = comments
};
Wall.Interfaces.EventArguments.CommentsRefreshedEventArgs
    .prototype = { $4_1: null, get_comments: function() { return this.$4_1 } };
Wall.Interfaces.EventArguments.ErrorEventArgs = function(response) {
    Wall.Interfaces.EventArguments.ErrorEventArgs.initializeBase(this);
    this.$8_1 = response
};
Wall.Interfaces.EventArguments.ErrorEventArgs.prototype = { $8_1: null, get_response: function() { return this.$8_1 } };
Wall.Interfaces.EventArguments.FiltersRefreshedEventArgs = function(filterType, filters) {
    Wall.Interfaces.EventArguments.FiltersRefreshedEventArgs.initializeBase(this);
    this.$6_1 = filterType;
    this.$5_1 = filters
};
Wall.Interfaces.EventArguments.FiltersRefreshedEventArgs
    .prototype = {
        $6_1: null,
        $5_1: null,
        get_filters: function() { return this.$5_1 },
        get_filterType: function() { return this.$6_1 }
    };
Wall.Interfaces.EventArguments.PostCreatedEventArgs = function(post) {
    Wall.Interfaces.EventArguments.PostCreatedEventArgs.initializeBase(this);
    this.$0_1 = post
};
Wall.Interfaces.EventArguments.PostCreatedEventArgs
    .prototype = { $0_1: null, get_post: function() { return this.$0_1 } };
Wall.Interfaces.EventArguments.PostCreatingEventArgs = function(post) {
    Wall.Interfaces.EventArguments.PostCreatingEventArgs.initializeBase(this);
    this.$0_1 = post
};
Wall.Interfaces.EventArguments.PostCreatingEventArgs
    .prototype = { $0_1: null, get_post: function() { return this.$0_1 } };
Wall.Interfaces.EventArguments.PostDeletedEventArgs = function(postId) {
    Wall.Interfaces.EventArguments.PostDeletedEventArgs.initializeBase(this);
    this.$7_1 = postId
};
Wall.Interfaces.EventArguments.PostDeletedEventArgs
    .prototype = { $7_1: null, get_postId: function() { return this.$7_1 } };
Wall.Interfaces.EventArguments.PostsInsertedEventArgs = function(posts) {
    Wall.Interfaces.EventArguments.PostsInsertedEventArgs.initializeBase(this);
    this.$1_1 = posts
};
Wall.Interfaces.EventArguments.PostsInsertedEventArgs
    .prototype = { $1_1: null, get_posts: function() { return this.$1_1 } };
Wall.Interfaces.EventArguments.PostsRefreshedEventArgs = function(posts) {
    Wall.Interfaces.EventArguments.PostsRefreshedEventArgs.initializeBase(this);
    this.$1_1 = posts
};
Wall.Interfaces.EventArguments.PostsRefreshedEventArgs
    .prototype = { $1_1: null, get_posts: function() { return this.$1_1 } };
Wall.Interfaces.EventArguments.PostsRefreshingEventArgs = function(retrievePostsRequest) {
    Wall.Interfaces.EventArguments.PostsRefreshingEventArgs.initializeBase(this);
    this.$9_1 = retrievePostsRequest
};
Wall.Interfaces.EventArguments.PostsRefreshingEventArgs
    .prototype = { $9_1: null, get_retrievePostsRequest: function() { return this.$9_1 } };
Wall.Interfaces.EventArguments.CommentCreatedEventArgs
    .registerClass("Wall.Interfaces.EventArguments.CommentCreatedEventArgs", Sys.EventArgs);
Wall.Interfaces.EventArguments.CommentDeletedEventArgs
    .registerClass("Wall.Interfaces.EventArguments.CommentDeletedEventArgs", Sys.EventArgs);
Wall.Interfaces.EventArguments.CommentsRefreshedEventArgs
    .registerClass("Wall.Interfaces.EventArguments.CommentsRefreshedEventArgs", Sys.EventArgs);
Wall.Interfaces.EventArguments.ErrorEventArgs.registerClass("Wall.Interfaces.EventArguments.ErrorEventArgs",
    Sys.EventArgs);
Wall.Interfaces.EventArguments.FiltersRefreshedEventArgs
    .registerClass("Wall.Interfaces.EventArguments.FiltersRefreshedEventArgs", Sys.EventArgs);
Wall.Interfaces.EventArguments.PostCreatedEventArgs
    .registerClass("Wall.Interfaces.EventArguments.PostCreatedEventArgs", Sys.EventArgs);
Wall.Interfaces.EventArguments.PostCreatingEventArgs
    .registerClass("Wall.Interfaces.EventArguments.PostCreatingEventArgs", Sys.EventArgs);
Wall.Interfaces.EventArguments.PostDeletedEventArgs
    .registerClass("Wall.Interfaces.EventArguments.PostDeletedEventArgs", Sys.EventArgs);
Wall.Interfaces.EventArguments.PostsInsertedEventArgs
    .registerClass("Wall.Interfaces.EventArguments.PostsInsertedEventArgs", Sys.EventArgs);
Wall.Interfaces.EventArguments.PostsRefreshedEventArgs
    .registerClass("Wall.Interfaces.EventArguments.PostsRefreshedEventArgs", Sys.EventArgs);
Wall.Interfaces.EventArguments.PostsRefreshingEventArgs
    .registerClass("Wall.Interfaces.EventArguments.PostsRefreshingEventArgs", Sys.EventArgs)