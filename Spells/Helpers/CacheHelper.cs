using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Runtime.Caching;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.Data.Helpers
{
    public class CacheHelper
    {
        public SpellBook GetSpellBook()
        {
            ObjectCache cache = MemoryCache.Default;
            SpellBook? spellBook = cache.Get("spellbook") as SpellBook;
            if (spellBook == null)
            {
                CacheItemPolicy policy = new CacheItemPolicy();
                spellBook = new SpellBook();
                cache.Set("spellbook", spellBook, policy);
            }
            return spellBook;
        }
    }
}
