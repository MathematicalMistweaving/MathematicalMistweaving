namespace Mistweaver.Data.Helpers
{
    public class StringHelper
    {
        public static bool Like(string one, string two)
        {
            return one.ToLower().Contains(two.ToLower());
        }
    }
}
