using System;
using NUnit.Framework;
using Tango.Type;

namespace Tango.Test
{
  [TestFixture]
  public class SortingSpec
  {
    public void IS_SORTED_empty_array ()
    {
      var xs = new FixedArray (10);

      Assert.IsTrue (Tango.Sorting.IsSorted (xs));
    }
  }
}

