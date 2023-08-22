package main

import (
	"fmt"
	"sort"
	"strings"
)

func main() {

	input := []string{"cook", "save", "taste", "aves", "vase", "state", "map"}
	fmt.Println("Result =", transformArray(input))
}

func transformArray(inputData []string) [][]string {
	result := [][]string{}
	for _, input := range inputData {

		inputSortString := sortSplitString(input)
		if len(result) == 0 {
			result = append(result, []string{input})
			continue
		}

		find := false
		for i, vres := range result {
			resSortString := sortSplitString(vres[0])

			if inputSortString == resSortString {
				result[i] = append(result[i], input)
				find = true
			}
		}

		if !find {
			result = append(result, []string{input})
		}

	}

	return result
}

func sortSplitString(input string) string {
	inputsplitstring := strings.Split(input, "")
	sort.Strings(inputsplitstring)
	return strings.Join(inputsplitstring, "")
}
