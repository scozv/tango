using System;
using Tango.Type;

namespace Tango
{
  public static partial class Sorting
  {
    public static bool IsSorted(FixedArray xs) {
      for (var i = 0; i < xs.Size - 1; i++) {
        var j = i + 1;
        // compare.result must be <= 0, as it is a sorted array
        // if (compare(xs[i], xs[j]) > 0) {return false;}
        if (xs[i] - xs[j] > 0) {return false;}
      }

      return true;
    }
  }
}

