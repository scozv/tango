package data

import (
	"reflect"
	"testing"
)

func TestLinkedList_Init(t *testing.T) {
	xs := new(LinkedList)

	if xs.Size() != 0 || !xs.IsEmpty() {
		t.Error("Empty LinkedList should have size 0")
	}
}

func TestLinkedList_Push(t *testing.T) {
	xs := new(LinkedList)

	if xs.NonEmpty() {
		t.Error("Empty LinkedList should not be NonEmpty")
	}

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
	if !reflect.DeepEqual(ys, []int{4, 3, 1, 9}) && len(ys) != 4 {
		// https://stackoverflow.com/a/53672500/3809076
		t.Errorf("[4, 3, 1, 9] failed on ToArray, the actual array is %d", ys)
	}
}

func TestLinkedList_prepend(t *testing.T) {
	xs := new(LinkedList)
	xs.prepend(4).prepend(3).prepend(1).prepend(9)

	ys := xs.ToArray()
	if !reflect.DeepEqual(ys, []int{9, 1, 3, 4}) && len(ys) != 4  {
		t.Errorf("[9, 1, 3, 4] failed on ToArray, the actual array is %d", ys)
	}
}

func TestLinkedList_Map(t *testing.T) {
	xs := new(LinkedList)
	xs.Push(4).Push(3).Push(1).Push(9)

	ys := xs.Map(func (elem interface{}) interface{} {
		return elem.(int) + 3
	})
	if !reflect.DeepEqual(ys.ToArray(), []int{7, 6, 4, 12}) && ys.Size() != 4  {
		t.Errorf("[4, 3, 1, 9] failed on Map(_ + 3), the actual array is %d", ys.ToArray())
	}
	if !reflect.DeepEqual(xs.ToArray(), []int{4, 3, 1, 9}) && xs.Size() != 4  {
		t.Errorf("[4, 3, 1, 9] should be immutable, but now it is %d", xs.ToArray())
	}

	zs := xs.Push(7).Map(func (elem interface{}) interface{} {
		return elem.(int) - 7
	})
	if !reflect.DeepEqual(zs.ToArray(), []int{-3, -4, -6, 0}) && zs.Size() != 5  {
		t.Errorf("[4, 3, 1, 9, 7] failed on Map(_ + 3), the actual array is %d", zs.ToArray())
	}
	if !reflect.DeepEqual(xs.ToArray(), []int{4, 3, 1, 9, 7}) && xs.Size() != 5  {
		t.Errorf("[4, 3, 1, 9, 7] should be immutable, but now it is %d", xs.ToArray())
	}
}