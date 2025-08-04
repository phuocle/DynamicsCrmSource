
var Wordcloud = function()
    {
        function Wordcloud(container,arr,colors)
        {
            this.wordsContainer = container;
            this.wordsObject = null;
            this.wordsArray = arr;
            this.resultArray = [];
            this.colors = colors
        }
        Wordcloud.prototype.getOptions = function(selector)
        {
            return {container:{element:$(selector),width:500,height:250,center:{x:500 / 2,y:250 / 2}}}
        };
        Wordcloud.prototype.drawOneWord = function(index,word,data)
        {
            var angle = Math.PI * Math.random(),
                radius = 0,
                weight = word.processWeight || WordcloudWord.determineWordWeight(word,this.wordsArray),
                aspectRatio = data.container.width / data.container.height,
                truncateSize = 15,
                el = $("<span>").addClass("w" + weight).text(word.text);
            data.container.element.append(el);
            word.offsetWidth = el.width();
            word.offsetHeight = el.height();
            el.remove();
            word.offsetLeft = data.container.center.x - word.offsetWidth / 2;
            word.offsetTop = data.container.center.y - word.offsetHeight / 2;
            word.processWeight = weight;
            while(!WordcloudWord.isPositionValid(word,this.resultArray))
            {
                radius += 1;
                angle += 4.5;
                word.offsetLeft = data.container.center.x - word.offsetWidth / 2 + radius * Math.cos(angle) * aspectRatio;
                word.offsetTop = data.container.center.y + radius * Math.sin(angle) - word.offsetHeight / 2 * aspectRatio
            }
            if(word.offsetLeft < 10 || word.offsetTop < 20 || word.offsetLeft + word.offsetWidth > data.container.width - 10 || word.offsetTop + word.offsetHeight > data.container.height - 20)
            {
                if(word.processWeight > 3)
                {
                    word.processWeight -= 1;
                    this.drawOneWord(index,word,data)
                }
                return
            }
            this.resultArray.push(word)
        };
        Wordcloud.prototype.processWords = function(data)
        {
            return this.resultArray.map(function(val,ind)
            {
                return {text:val.text,weight:val.weight,volume:val.volume,trend:val.trend,opacity:val.opacity,processWeight:val.processWeight,color:val.color,width:WordcloudWord.getPercentage(val.offsetWidth,data.container.width),height:WordcloudWord.getPercentage(val.offsetHeight,data.container.height),left:WordcloudWord.getPercentage(val.offsetLeft,data.container.width),top:WordcloudWord.getPercentage(val.offsetTop,data.container.height),orig:val.orig || val,offsetHeight:val.offsetHeight,offsetLeft:val.offsetLeft,offsetTop:val.offsetTop,offsetWidth:val.offsetWidth,tooltip:val.tooltip}
            })
        };
        Wordcloud.prototype.calculateFontSize = function(el)
        {
            var elem = $(el);
            elem.width() && 
                elem.css("font-size",WordcloudWord.getPercentage(elem.width(),this.wordsObject.container.width) + "%")
        };
        Wordcloud.prototype.drawWordCloud = function()
        {
            var _this = this,
                data = this.getOptions(this.wordsContainer);
            this.wordsObject = data;
            this.wordsArray = WordcloudWord.sortArray(this.wordsArray);
            this.resultArray = [];
            this.wordsArray.forEach(function(val,index)
            {
                _this.drawOneWord(index,val,data);
                if(_this.colors)
                    if(_this.colors.length > 1)
                        val.color = val.processWeight === 5 ? _this.colors[0] : _this.colors[index % _this.colors.length - 1];
                    else
                        val.color = _this.colors[0]
            });
            return {series:this.processWords(data),data:{data:data,wordsArray:this.wordsArray,resultsArray:this.resultArray}}
        };
        return Wordcloud
    }()
