using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace real_estate_app.Models
{
    public class PropertyListing
    {
        public string Address { get; set; }
        public string City { get; set; }
        public decimal Price { get; set; }
        public int ID { get; set; }
        public int Bedrooms { get; set; }
        public int Bathrooms { get; set; }
        public DateTime YearBuilt { get; set; }
    }

    public class PropertyListingDBContext : DbContext {
        public DbSet<PropertyListing> PropertyListings { get; set; }
    }
}