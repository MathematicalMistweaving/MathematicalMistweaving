namespace Mistweaver.Data.Profile
{
    public class PlayerExternalMana
    {
        public PlayerExternalMana() { }
        public PlayerExternalMana(PlayerExternalMana externalMana) 
        {
            this.Innervates = externalMana.Innervates;
            this.EscapeFromReality = externalMana.EscapeFromReality;
            this.BlessingOfWinter = externalMana.BlessingOfWinter;
            this.ManaSpring = externalMana.ManaSpring;
            this.ManaTide = externalMana.ManaTide; 
            this.SymbolOfHope = externalMana.SymbolOfHope;  
            this.SourceOfMagic = externalMana.SourceOfMagic;
            this.ManaPotion = externalMana.ManaPotion;
            
        }

        public int Innervates { get; set; }
        public bool EscapeFromReality { get; set; }
        public bool BlessingOfWinter { get; set; }
        public bool ManaSpring { get; set; }   
        public bool ManaTide { get; set; }
        public bool SymbolOfHope { get; set; }
        public bool SourceOfMagic { get; set; }
        public ManaPotions ManaPotion { get; set; } 
        
    }
}
