package data

import (
	"testing"
)

func TestLinkedList_Init(t *testing.T) {
	xs := new(LinkedList)
	xs.expectedToBeEmpty("Empty LinkedList should have size 0", t)

	xs.Map(func(x interface{}) interface{} {
		// infinity loop should not be invoked
		for 0 < 1 {
			x = x.(int) + 1
		}

		return x
	}).expectedToBeEmpty("Empty.map should have size 0", t)

	if len(xs.ToArray()) != 0 {
		t.Error("Empty.toArray should have size 0")
	}
}

func TestLinkedList_Push(t *testing.T) {
	xs := new(LinkedList)
	xs.expectedToBeEmpty("Empty LinkedList should not be NonEmpty", t)

	xs.Push(4)
	if xs.Size() != 1 {
		t.Error("[4] should have size 1")
	}

	xs.Push(5).Push(6).Push("S")
	if xs.Size() != 4 {
		t.Error("[4, 5, 6, 'S'] should have size 4")
	}
}

func TestLinkedList_append(t *testing.T) {
	xs := new(LinkedList)
	xs.append(4).append(3).append(1).append(9)

	ys := xs.ToArray()
	if !equals(ys, []int{4, 3, 1, 9}) {
		t.Errorf("[4, 3, 1, 9] failed on ToArray, the actual array is %d", ys)
	}
}

func TestLinkedList_prepend(t *testing.T) {
	xs := new(LinkedList)
	xs.prepend(4).prepend(3).prepend(1).prepend(9)
	xs.expectedToEqual([]int{9, 1, 3, 4}, "[9, 1, 3, 4] failed on ToArray", t)
}

func TestLinkedList_Map(t *testing.T) {
	xs := new(LinkedList)
	xs.Push(4).Push(3).Push(1).Push(9)

	ys := xs.Map(func (elem interface{}) interface{} {
		return elem.(int) + 3
	})
	ys.expectedToEqual([]int{7, 6, 4, 12}, "[4, 3, 1, 9] failed on Map(_ + 3)", t)
	xs.expectedToEqual([]int{4, 3, 1, 9}, "[4, 3, 1, 9] should be immutable", t)

	zs := xs.Push(7).Map(func (elem interface{}) interface{} {
		return elem.(int) - 7
	})
	zs.expectedToEqual([]int{-3, -4, -6, 2, 0}, "[4, 3, 1, 9, 7] failed on Map(_ + 3)", t)
	xs.expectedToEqual([]int{4, 3, 1, 9, 7}, "[4, 3, 1, 9, 7] should be immutable", t)
}

func TestLinkedList_Reverse(t *testing.T) {
	xs := new(LinkedList)
	if xs.Reverse() != xs {
		t.Error("Reverse of empty list should be itself")
	}

	xs.Push(4).Push(3).Push(1).Push(9)
	ys := xs.Reverse()
	xs.expectedToEqual([]int{4, 3, 1, 9}, "After reverse, [4, 3, 1, 9] should be immutable", t)
	ys.expectedToEqual([]int{9, 1, 3, 4}, "Reverse of [4, 3, 1, 9] should be [9, 1, 3, 4]", t)
}

func TestLinkedList_Insert(t *testing.T) {
	xs := new(LinkedList)
	xs.Insert(1, -1)
	xs.expectedToEqual([]int{1}, "[].insert(1, -1) should be [1]", t)

	xs.Insert(5, 0)
	xs.expectedToEqual([]int{1, 5}, "[1].insert(5, 0) should be [1, 5]", t)

	xs.Insert(7, 0)
	xs.expectedToEqual([]int{1, 7, 5}, "[1, 5].insert(7, 0) should be [1, 7, 5]", t)
}

// helper function to compare LinkedList with []int
// given our test data of LinkedList are all collection of int
func (xs *LinkedList) expectedToEqual(expected []int, error string, t *testing.T) {
	actual := xs.ToArray()
	// https://stackoverflow.com/a/53672500/3809076
	if xs.Size() != len(expected) || !equals(actual, expected) {
		t.Errorf("%s, expected %d but actual is %d", error, expected, actual)
	}
}

func (xs *LinkedList) expectedToBeEmpty(error string, t *testing.T) {
	if xs.Size() != 0 {
		t.Errorf("Empty check failed: %s", error)
	}
}

func equals(xs []interface{}, ys []int) bool {
	if len(xs) != len(ys) {
		return false
	} else {
		for i := range xs {
			if xs[i].(int) != ys[i] {
				return false
			}
		}
	}

	return true
}