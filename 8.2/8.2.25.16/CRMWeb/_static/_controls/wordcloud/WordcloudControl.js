
var WordCloudControl = React.createClass({wordCloudData:Wordcloud,getInitialState:function()
    {
        return {loaded:false,series:null}
    },renderWords:function(data)
    {
        var _this = this;
        return data.map(function(word,i)
        {
            var currentStyle = {left:word.left + "%",top:word.top + "%",color:word.color,opacity:word.opacity},
                className = "w" + word.processWeight,
                isDrillDown = !(_this.props.selectedWord == null || _this.props.selectedWord == "null");
            if(isDrillDown)
                if(word.tooltip == _this.props.selectedWord)
                    className += " selected";
            className += !_this.props.onWordClick ? " disabled" : " enabled";
            return React.DOM.span({className:className,onClick:_this.handleWordClick.bind(_this,word),style:currentStyle,title:word.tooltip},word.text)
        })
    },handleWordClick:function(word)
    {
        this.props.onWordClick && 
            this.props.onWordClick(word)
    },componentDidMount:function()
    {
        this.update(this.props)
    },update:function()
    {
        var words = this.props.phrases.map(function(it)
            {
                return new WordcloudWord(it.name,it.weight,it.weight,it.color)
            });
        this.wordCloudData = new Wordcloud(document.getElementsByClassName(this.props.parentClass)[0],words,this.props.colors);
        var wordCloudSeries = this.wordCloudData.drawWordCloud();
        this.setState({loaded:true,series:wordCloudSeries.series})
    },render:function()
    {
        if(this.state.loaded)
            return React.DOM.div({className:this.props.parentClass + " wordcloud-container"},this.renderWords(this.state.series));
        else
            return React.DOM.div({className:this.props.parentClass + " wordcloud-container"},null)
    }})
