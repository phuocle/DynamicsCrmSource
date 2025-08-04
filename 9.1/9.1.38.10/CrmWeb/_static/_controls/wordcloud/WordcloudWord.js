
var WordcloudWord = function()
    {
        function WordcloudWord(text,weight,volume,color,opacity)
        {
            if(opacity === void 0)
                opacity = 1;
            this.text = text.length > 20 ? text.substr(0,20) + "..." : text;
            this.weight = weight;
            this.volume = volume;
            this.color = color;
            this.opacity = opacity;
            this.tooltip = text
        }
        WordcloudWord.sortArray = function(arr)
        {
            return arr.sort(function(a,b)
            {
                return a.weight < b.weight ? 1 : a.weight > b.weight ? -1 : 0
            })
        };
        WordcloudWord.determineWordWeight = function(word,arr)
        {
            if(arr[0].weight > arr[arr.length - 1].weight)
                return Math.round((word.weight - arr[arr.length - 1].weight) / (arr[0].weight - arr[arr.length - 1].weight) * 9) + 1;
            return 10
        };
        WordcloudWord.areOverlapping = function(el1,el2)
        {
            var isWidthOverlapping = Math.abs(el1.offsetLeft * 2 + el1.offsetWidth - el2.offsetLeft * 2 - el2.offsetWidth) < el1.offsetWidth + el2.offsetWidth + 10 ? true : false,
                isHeightOverlapping = Math.abs(el1.offsetTop * 2 + el1.offsetHeight - el2.offsetTop * 2 - el2.offsetHeight) < el1.offsetHeight + el2.offsetHeight + 5 ? true : false;
            return isWidthOverlapping && isHeightOverlapping ? true : false
        };
        WordcloudWord.isPositionValid = function(el,elems)
        {
            for(var i = 0; i < elems.length; i++)
                if(this.areOverlapping(el,elems[i]))
                    return false;
            return true
        };
        WordcloudWord.getPercentage = function(val,whole)
        {
            if(!whole)
                return 0;
            return val * 100 / whole
        };
        return WordcloudWord
    }()
