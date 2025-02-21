namespace Mistweaver.Data.Interfaces
{
    public interface ITalent
    {
        public decimal CalculateUniqueEffect<T>();

        public decimal CalculateHps<T>();
        public void ModifyProperties<T>(T spell);

    }
}
