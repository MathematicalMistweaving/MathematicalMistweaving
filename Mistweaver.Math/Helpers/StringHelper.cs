using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.Data.Helpers
{
    public static class StringHelper
    {
        public static bool Like(string one, string two)
        {
            return one.ToLower().Contains(two.ToLower());
        }
    }
}
