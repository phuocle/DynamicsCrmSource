
function arrayBenchmark()
{
    for(var ret = [],
        tmp,
        n = 2e3,
        j = 0; j < n * 15; j++)
    {
        ret = [];
        ret.length = n
    }
    for(var j = 0; j < n * 10; j++)
        ret = new Array(n);
    ret = [];
    for(var j = 0; j < n; j++)
        ret.unshift(j);
    ret = [];
    for(var j = 0; j < n; j++)
        ret.splice(0,0,j);
    for(var a = ret.slice(),
        j = 0; j < n; j++)
        tmp = a.shift();
    for(var a = ret.slice(),
        j = 0; j < n; j++)
        tmp = a.splice(0,1);
    ret = [];
    for(var j = 0; j < n; j++)
        ret.push(j);
    for(var a = ret.slice(),
        j = 0; j < n; j++)
        tmp = a.pop()
}
function morphBenchmark()
{
    var loops = 30,
        nx = 120,
        nz = 120;
    function morph(a,f)
    {
        for(var PI2nx = Math.PI * 8 / nx,
            sin = Math.sin,
            f30 = -(50 * sin(f * Math.PI * 2)),
            i = 0; i < nz; ++i)
            for(var j = 0; j < nx; ++j)
                a[3 * (i * nx + j) + 1] = sin((j - 1) * PI2nx) * -f30
    }
    for(var a = Array(),
        i = 0; i < nx * nz * 3; ++i)
        a[i] = 0;
    for(var i = 0; i < loops; ++i)
        morph(a,i / loops)
}
function base64Benchmark()
{
    var toBase64Table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        base64Pad = "=";
    function toBase64(data)
    {
        for(var result = "",
            length = data.length,
            i = 0; i < length - 2; i += 3)
        {
            result += toBase64Table[data[i] >> 2];
            result += toBase64Table[((data[i] & 3) << 4) + (data[i + 1] >> 4)];
            result += toBase64Table[((data[i + 1] & 15) << 2) + (data[i + 2] >> 6)];
            result += toBase64Table[data[i + 2] & 63]
        }
        if(length % 3)
        {
            i = length - length % 3;
            result += toBase64Table[data[i] >> 2];
            if(length % 3 == 2)
            {
                result += toBase64Table[((data[i] & 3) << 4) + (data[i + 1] >> 4)];
                result += toBase64Table[(data[i + 1] & 15) << 2];
                result += base64Pad
            }
            else
            {
                result += toBase64Table[(data[i] & 3) << 4];
                result += base64Pad + base64Pad
            }
        }
        return result
    }
    var toBinaryTable = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,0,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1];
    function base64ToString(data)
    {
        for(var result = "",
            leftbits = 0,
            leftdata = 0,
            i = 0; i < data.length; i++)
        {
            var c = toBinaryTable[data.charCodeAt(i) & 127],
                padding = data[i] == base64Pad;
            if(c == -1)
                continue;
            leftdata = leftdata << 6 | c;
            leftbits += 6;
            if(leftbits >= 8)
            {
                leftbits -= 8;
                if(!padding)
                    result += String.fromCharCode(leftdata >> leftbits & 255);
                leftdata &= (1 << leftbits) - 1
            }
        }
        if(leftbits)
            throw Components.Exception("Corrupted base64 string");
        return result
    }
    for(var str = [],
        i = 0; i < 819; i++)
        str.push(String.fromCharCode(25 * Math.random() + 97));
    str = str.join("");
    for(var base64,
        loops = 1,
        i = 0; i <= loops; i++)
        base64 = toBase64(str);
    for(var i = 0; i <= loops; i++)
        base64ToString(base64)
}
function domBenchmark()
{
    var count = 1500,
        divs = new Array(count);
    function testAppend(div)
    {
        for(var i = 0; i < count; i += 1)
        {
            var add = document.createElement("div");
            div.appendChild(add)
        }
    }
    function testPrepend(div)
    {
        for(var i = 0; i < count; i += 1)
        {
            var add = document.createElement("div");
            div.insertBefore(add,XUI.Html.DomUtils.GetFirstChild(div))
        }
    }
    function testIndex(div)
    {
        for(var i = 0; i < count; i += 1)
            divs[i] = div.childNodes[count * 2 - i * 2 - 1]
    }
    function testInsert(div)
    {
        for(var i = 0; i < count; i += 1)
        {
            var add = document.createElement("div");
            div.insertBefore(add,divs[i])
        }
    }
    function testRemove(div)
    {
        for(var i = 0; i < count; i += 1)
            div.removeChild(divs[i])
    }
    var div = document.createElement("div");
    div.style.display = "none";
    div.setAttribute("id","domBenchmarkDiv");
    document.body.appendChild(div);
    var start,
        end;
    start = new Date;
    testAppend(div);
    end = new Date;
    var appendTime = end - start;
    start = new Date;
    testPrepend(div);
    end = new Date;
    var prependTime = end - start;
    start = new Date;
    testIndex(div);
    end = new Date;
    var indexTime = end - start;
    start = new Date;
    testInsert(div);
    end = new Date;
    var insertTime = end - start;
    start = new Date;
    testRemove(div);
    end = new Date;
    var removeTime = end - start;
    document.body.removeChild(div);
    var total = appendTime + prependTime + insertTime + indexTime + removeTime,
        results = "Breakdown:\r\n  Append:  " + appendTime + "ms\r\n  Prepend: " + prependTime + "ms\r\n  Index:   " + indexTime + "ms\r\n  Insert:  " + insertTime + "ms\r\n  Remove:  " + removeTime + "ms\r\n";
    return [total,results]
}
