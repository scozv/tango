using System;

namespace Tango.Type
{
  public class FixedArray
  {
    public FixedArray (int n)
    {
      size = 0;
      capacity = n;
    }

    public int Append(int item) {
      return -1;
    }
    public FixedArray Clone() {
      return null;
    }
    public int this[int index] {
      get { 
        return -1;
      }
    }

    public int Size {get{return Size;}}

    private int size;
    private int capacity;
  }
}

