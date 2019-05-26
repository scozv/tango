package data

// Learn from https://golang.org/src/container/list/list.go
type node struct {
	elem interface{}
	next *node
}

type LinkedList struct {
	head   *node
	last   *node
	length int
}

func (xs *LinkedList) Init() *LinkedList {
	xs.length = 0
	return xs
}

func (xs *LinkedList) Size() int {
	return xs.length
}

func (xs *LinkedList) IsEmpty() bool {
	return xs.length <= 0
}

func (xs *LinkedList) NonEmpty() bool {
	return ! xs.IsEmpty()
}

func (xs *LinkedList) prepend(elem interface{}) *LinkedList {
	x := node{elem, xs.head}

	if xs.IsEmpty() {
		xs.last = &x
		xs.length = 1
	} else {
		xs.length = xs.length + 1
	}

	xs.head = &x
	return xs
}

func (xs *LinkedList) append(elem interface{}) *LinkedList {
	x := node{elem, nil}

	if xs.IsEmpty() {
		xs.head = &x
		xs.length = 1
	} else {
		xs.last.next = &x
		xs.length = xs.length + 1
	}

	xs.last = &x
	return xs
}

func (xs *LinkedList) Push(elem interface{}) *LinkedList {
	return xs.append(elem)
}

func (xs *LinkedList) insert(elem interface{}, i int) *LinkedList {
	return nil
}

// Apply a function called fn on each element value
func (xs *LinkedList) ForEach(fn func(interface{})) {
	p := xs.head
	for p != nil {
		fn(p.elem)
		p = p.next
	}
}

func (xs *LinkedList) Map(fn func(interface{}) interface{}) *LinkedList {
	ys := new(LinkedList).Init()

	xs.ForEach(func(elem interface{}) {
		ys.append(fn(elem))
	})

	return ys
}

func (xs *LinkedList) ToArray() []interface{} {
	var ys []interface{}

	xs.ForEach(func (elem interface{}) {
		ys = append(ys, elem)
	})

	return ys
}

func (xs *LinkedList) Reverse() *LinkedList {
	if xs.IsEmpty() {
		return xs
	} else {
		ys := new(LinkedList).Init()

		xs.ForEach(func(elem interface{}) {
			ys.prepend(elem)
		})

		return ys
	}
}

