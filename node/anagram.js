function transformArray(inputArray) {
    const resultMap = []
  
    for (let i = 0; i < inputArray.length; i++) {
        element = inputArray[i]
        joinedstring = sortSplit(element)

        if (resultMap.length == 0) {
            resultMap[0] = [element]
            continue
        }

        indexElement = 0
        find = false

        for (let j = 0; j < resultMap.length; j++) {

            const firstWord = resultMap[j][0];
            joinFirstWord = sortSplit(firstWord)
            indexElement = j

            if (joinFirstWord == joinedstring) {
                resultMap[j][resultMap[j].length] = element
                find = true
                break
            }
        }

        if (!find) {
            resultMap[indexElement+1] = [element]
        }
    }
  
    return resultMap
}

function sortSplit(alphabet) {
    sorttWord = sorting([...alphabet])
    joinWord = joinstring(sorttWord)

    return joinWord
}

function sorting(alphabet) {
    for (let i = 1; i < alphabet.length; i++) {
        const currentElement = alphabet[i];
        let j = i - 1
    
        while (j >= 0 && alphabet[j] > currentElement) {
            alphabet[j + 1] = alphabet[j]
            j--
        } 
    
        alphabet[j + 1] = currentElement
    }

    return alphabet
}

function joinstring(alphabet) {
    let joinedString = ''
    for (let i = 0; i < alphabet.length; i++) {
        joinedString += alphabet[i];
        
        if (i < alphabet.length - 1) {
            joinedString += ''
        }
    }
    return joinedString
}

  
  const inputArray = ["cook", "save", "taste", "aves", "vase", "state", "map"]
  const transformedArray = transformArray(inputArray)
  
  console.log(transformedArray);
  