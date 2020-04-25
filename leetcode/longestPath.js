var lengthLongestPath = function(input) {
    let index = 0,
        currentFile = '',
        longestStr = '',
        pathLevel = 0,
        tmpString = '',
        strLevels = [];
    
    while (index < input.length) {
        while(index < input.length && input[index] !== '\n') {
            currentFile += input[index];
            index++
        }
        strLevels[pathLevel] = currentFile;
        
        // get path string
        for (let i = 0; i <= pathLevel; i++) {
            tmpString += strLevels[i]
            if (i !== pathLevel) tmpString += '/'
        }

        
        if (tmpString.includes('.') && longestStr.length < tmpString.length) longestStr = tmpString;
        
        // set new var states
        index++;
        currentFile = '';
        tmpString = '';
        pathLevel = 0;
        
        while(input[index] === '\t') {
            pathLevel++;
            index++;
        }
    }
    return longestStr.length
    
};

console.log(lengthLongestPath("dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"));
console.log(lengthLongestPath("a"));