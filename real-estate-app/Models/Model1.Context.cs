﻿//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace real_estate_app.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Objects;
    using System.Data.Objects.DataClasses;
    using System.Linq;
    
    public partial class MLSEntities : DbContext
    {
        public MLSEntities()
            : base("name=MLSEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public DbSet<AllProperty> AllProperties { get; set; }
        public DbSet<Medium> Media { get; set; }
        public DbSet<StateCountyCity> StateCountyCities { get; set; }
        public DbSet<StateCountyTownship> StateCountyTownships { get; set; }
        public DbSet<StateSchoolDistrict> StateSchoolDistricts { get; set; }
    
        public virtual ObjectResult<GetAPMLS_Result> GetAPMLS(string mLS, string minPrice, string maxPrice, string beds, string bathrooms, string minHomeSizeSqFt, string maxHomeSizeSqFt, string minLotSizeAcre, string maxLotSizeAcre, string daysListed, string minAge, string maxAge, string propertyTypeLandAndLot, string propertyTypeCondoTownHouse, string propertyTypeSingleFamily, string status)
        {
            var mLSParameter = mLS != null ?
                new ObjectParameter("MLS", mLS) :
                new ObjectParameter("MLS", typeof(string));
    
            var minPriceParameter = minPrice != null ?
                new ObjectParameter("MinPrice", minPrice) :
                new ObjectParameter("MinPrice", typeof(string));
    
            var maxPriceParameter = maxPrice != null ?
                new ObjectParameter("MaxPrice", maxPrice) :
                new ObjectParameter("MaxPrice", typeof(string));
    
            var bedsParameter = beds != null ?
                new ObjectParameter("Beds", beds) :
                new ObjectParameter("Beds", typeof(string));
    
            var bathroomsParameter = bathrooms != null ?
                new ObjectParameter("Bathrooms", bathrooms) :
                new ObjectParameter("Bathrooms", typeof(string));
    
            var minHomeSizeSqFtParameter = minHomeSizeSqFt != null ?
                new ObjectParameter("MinHomeSizeSqFt", minHomeSizeSqFt) :
                new ObjectParameter("MinHomeSizeSqFt", typeof(string));
    
            var maxHomeSizeSqFtParameter = maxHomeSizeSqFt != null ?
                new ObjectParameter("MaxHomeSizeSqFt", maxHomeSizeSqFt) :
                new ObjectParameter("MaxHomeSizeSqFt", typeof(string));
    
            var minLotSizeAcreParameter = minLotSizeAcre != null ?
                new ObjectParameter("MinLotSizeAcre", minLotSizeAcre) :
                new ObjectParameter("MinLotSizeAcre", typeof(string));
    
            var maxLotSizeAcreParameter = maxLotSizeAcre != null ?
                new ObjectParameter("MaxLotSizeAcre", maxLotSizeAcre) :
                new ObjectParameter("MaxLotSizeAcre", typeof(string));
    
            var daysListedParameter = daysListed != null ?
                new ObjectParameter("DaysListed", daysListed) :
                new ObjectParameter("DaysListed", typeof(string));
    
            var minAgeParameter = minAge != null ?
                new ObjectParameter("MinAge", minAge) :
                new ObjectParameter("MinAge", typeof(string));
    
            var maxAgeParameter = maxAge != null ?
                new ObjectParameter("MaxAge", maxAge) :
                new ObjectParameter("MaxAge", typeof(string));
    
            var propertyTypeLandAndLotParameter = propertyTypeLandAndLot != null ?
                new ObjectParameter("PropertyTypeLandAndLot", propertyTypeLandAndLot) :
                new ObjectParameter("PropertyTypeLandAndLot", typeof(string));
    
            var propertyTypeCondoTownHouseParameter = propertyTypeCondoTownHouse != null ?
                new ObjectParameter("PropertyTypeCondoTownHouse", propertyTypeCondoTownHouse) :
                new ObjectParameter("PropertyTypeCondoTownHouse", typeof(string));
    
            var propertyTypeSingleFamilyParameter = propertyTypeSingleFamily != null ?
                new ObjectParameter("PropertyTypeSingleFamily", propertyTypeSingleFamily) :
                new ObjectParameter("PropertyTypeSingleFamily", typeof(string));
    
            var statusParameter = status != null ?
                new ObjectParameter("Status", status) :
                new ObjectParameter("Status", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetAPMLS_Result>("GetAPMLS", mLSParameter, minPriceParameter, maxPriceParameter, bedsParameter, bathroomsParameter, minHomeSizeSqFtParameter, maxHomeSizeSqFtParameter, minLotSizeAcreParameter, maxLotSizeAcreParameter, daysListedParameter, minAgeParameter, maxAgeParameter, propertyTypeLandAndLotParameter, propertyTypeCondoTownHouseParameter, propertyTypeSingleFamilyParameter, statusParameter);
        }
    
        public virtual ObjectResult<GetAPStateCity_Result> GetAPStateCity(string state, string city, string minPrice, string maxPrice, string beds, string bathrooms, string minHomeSizeSqFt, string maxHomeSizeSqFt, string minLotSizeAcre, string maxLotSizeAcre, string daysListed, string minAge, string maxAge, string propertyTypeLandAndLot, string propertyTypeCondoTownHouse, string propertyTypeSingleFamily, string status, string orderby)
        {
            var stateParameter = state != null ?
                new ObjectParameter("State", state) :
                new ObjectParameter("State", typeof(string));
    
            var cityParameter = city != null ?
                new ObjectParameter("City", city) :
                new ObjectParameter("City", typeof(string));
    
            var minPriceParameter = minPrice != null ?
                new ObjectParameter("MinPrice", minPrice) :
                new ObjectParameter("MinPrice", typeof(string));
    
            var maxPriceParameter = maxPrice != null ?
                new ObjectParameter("MaxPrice", maxPrice) :
                new ObjectParameter("MaxPrice", typeof(string));
    
            var bedsParameter = beds != null ?
                new ObjectParameter("Beds", beds) :
                new ObjectParameter("Beds", typeof(string));
    
            var bathroomsParameter = bathrooms != null ?
                new ObjectParameter("Bathrooms", bathrooms) :
                new ObjectParameter("Bathrooms", typeof(string));
    
            var minHomeSizeSqFtParameter = minHomeSizeSqFt != null ?
                new ObjectParameter("MinHomeSizeSqFt", minHomeSizeSqFt) :
                new ObjectParameter("MinHomeSizeSqFt", typeof(string));
    
            var maxHomeSizeSqFtParameter = maxHomeSizeSqFt != null ?
                new ObjectParameter("MaxHomeSizeSqFt", maxHomeSizeSqFt) :
                new ObjectParameter("MaxHomeSizeSqFt", typeof(string));
    
            var minLotSizeAcreParameter = minLotSizeAcre != null ?
                new ObjectParameter("MinLotSizeAcre", minLotSizeAcre) :
                new ObjectParameter("MinLotSizeAcre", typeof(string));
    
            var maxLotSizeAcreParameter = maxLotSizeAcre != null ?
                new ObjectParameter("MaxLotSizeAcre", maxLotSizeAcre) :
                new ObjectParameter("MaxLotSizeAcre", typeof(string));
    
            var daysListedParameter = daysListed != null ?
                new ObjectParameter("DaysListed", daysListed) :
                new ObjectParameter("DaysListed", typeof(string));
    
            var minAgeParameter = minAge != null ?
                new ObjectParameter("MinAge", minAge) :
                new ObjectParameter("MinAge", typeof(string));
    
            var maxAgeParameter = maxAge != null ?
                new ObjectParameter("MaxAge", maxAge) :
                new ObjectParameter("MaxAge", typeof(string));
    
            var propertyTypeLandAndLotParameter = propertyTypeLandAndLot != null ?
                new ObjectParameter("PropertyTypeLandAndLot", propertyTypeLandAndLot) :
                new ObjectParameter("PropertyTypeLandAndLot", typeof(string));
    
            var propertyTypeCondoTownHouseParameter = propertyTypeCondoTownHouse != null ?
                new ObjectParameter("PropertyTypeCondoTownHouse", propertyTypeCondoTownHouse) :
                new ObjectParameter("PropertyTypeCondoTownHouse", typeof(string));
    
            var propertyTypeSingleFamilyParameter = propertyTypeSingleFamily != null ?
                new ObjectParameter("PropertyTypeSingleFamily", propertyTypeSingleFamily) :
                new ObjectParameter("PropertyTypeSingleFamily", typeof(string));
    
            var statusParameter = status != null ?
                new ObjectParameter("Status", status) :
                new ObjectParameter("Status", typeof(string));
    
            var orderbyParameter = orderby != null ?
                new ObjectParameter("Orderby", orderby) :
                new ObjectParameter("Orderby", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetAPStateCity_Result>("GetAPStateCity", stateParameter, cityParameter, minPriceParameter, maxPriceParameter, bedsParameter, bathroomsParameter, minHomeSizeSqFtParameter, maxHomeSizeSqFtParameter, minLotSizeAcreParameter, maxLotSizeAcreParameter, daysListedParameter, minAgeParameter, maxAgeParameter, propertyTypeLandAndLotParameter, propertyTypeCondoTownHouseParameter, propertyTypeSingleFamilyParameter, statusParameter, orderbyParameter);
        }
    
        public virtual ObjectResult<GetImagesByListingID_Result> GetImagesByListingID(string listingId)
        {
            var listingIdParameter = listingId != null ?
                new ObjectParameter("listingId", listingId) :
                new ObjectParameter("listingId", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetImagesByListingID_Result>("GetImagesByListingID", listingIdParameter);
        }
    
        public virtual ObjectResult<spGetCitiesForStateCounty_Result> spGetCitiesForStateCounty(string state, string county)
        {
            var stateParameter = state != null ?
                new ObjectParameter("State", state) :
                new ObjectParameter("State", typeof(string));
    
            var countyParameter = county != null ?
                new ObjectParameter("County", county) :
                new ObjectParameter("County", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<spGetCitiesForStateCounty_Result>("spGetCitiesForStateCounty", stateParameter, countyParameter);
        }
    
        public virtual ObjectResult<spGetSchoolDistrictsForState_Result> spGetSchoolDistrictsForState(string state)
        {
            var stateParameter = state != null ?
                new ObjectParameter("State", state) :
                new ObjectParameter("State", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<spGetSchoolDistrictsForState_Result>("spGetSchoolDistrictsForState", stateParameter);
        }
    
        public virtual ObjectResult<spGetTownshipsForStateCounty_Result> spGetTownshipsForStateCounty(string state, string county)
        {
            var stateParameter = state != null ?
                new ObjectParameter("State", state) :
                new ObjectParameter("State", typeof(string));
    
            var countyParameter = county != null ?
                new ObjectParameter("County", county) :
                new ObjectParameter("County", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<spGetTownshipsForStateCounty_Result>("spGetTownshipsForStateCounty", stateParameter, countyParameter);
        }
    }
}
