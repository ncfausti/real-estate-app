using System;
using System.Collections.Generic;
using System.Data.Objects;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using real_estate_app.Models;
using System.Text;
using System.Data.SqlClient;
using System.Globalization;

namespace real_estate_app.Controllers
{
    public class HomeController : Controller
    {
        private MLSEntities db = new MLSEntities();
        public ActionResult Index(string Command)
        {   
            var homeList = new List<string>();
         //   var properties = db.AllProperties;

            return View();
        }

        public void log(string s)
        {
            System.Diagnostics.Debug.WriteLine("-!-Logging: " + s);
        }

        [HttpPost]
        public ActionResult Index(string Command, FormCollection formCollection)
        {
            //
            //TODO: Recreate model with new stored procedures
            //
           
            string[] optionList = {"","Highest Price", "Lowest Price", "Most Beds", "Least Beds", "Most Baths", "Least Baths","Smallest Size","Largest Size","Smallest Lot","Largest Lot","Newest","Oldest"};
            string hiddenSort = Request.Form["hidden-sort"];

            StringBuilder sbSortOptions = new StringBuilder();
            for (var index = 0; index < optionList.Length; index++)
            {
                if (optionList[index] == hiddenSort)
                {
                    sbSortOptions.Append("<option class='sort-by-setting' selected='selected'>" + optionList[index] + "</option>");
                }
                else
                {
                    //if no prev value, use Highest First
                    if(index == 1)
                        sbSortOptions.Append("<option class='sort-by-setting' selected='selected'>Highest Price</option>");
                    else
                        sbSortOptions.Append("<option class='sort-by-setting'>" + optionList[index] + "</option>");

                }
            }

            ViewBag.SortOptionList = sbSortOptions.ToString();
            log(sbSortOptions.ToString());

            var selectedOptionText = Request.Form["hidden-sort"];

            var properties = db.GetAPStateCity("",
                Request["cities-select-to"],
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
                
                );

            List<GetAPStateCity_Result> homesList = new List<GetAPStateCity_Result>();

            var count = 0;
            int homeCount = 0;
            StringBuilder sb = new StringBuilder();

            int i = 1;
            foreach (var property in properties) {
                List<string> imageUrls = new List<string>();
                List<string> imageThumbUrls = new List<string>();
                var address = property.FullStreetAddress.Replace("\n", "");
                address = address.Replace("'", "");
                address = address.Replace("\"", "");

                if (homeCount < 50) // Only allow max 50 records
                {
                    homesList.Add(property);
                    var price = Convert.ToDouble(property.ListPrice) > 0 ? property.ListPrice: property.ClosePrice;
                    // Build property list for map markers
                    sb.Append("{'acres':'" + property.LotAreaAcre + "',");
                    sb.Append("'price':'" + price + "',");
                    sb.Append("'address':'" + address.ToLower() + "',");
                    sb.Append("'listingID':'" + property.ListingID + "',");
                    sb.Append("'sqFt':'" + property.NetSQFT  + "',");
                    sb.Append("'yearBuilt':'" + property.PropertyAge + "',");
                    sb.Append("'beds':'" + property.Beds + "',");
                    sb.Append("'lat':'" + property.Latitude + "',");
                    sb.Append("'lng':'" + property.Longitude + "',");

                    int imageNumber = 0;
                    count += 1;
                    if (count < 10)  // Only load images for first five properties
                    {
                        ObjectResult<GetImagesByListingID_Result> images = db.GetImagesByListingID(property.ListingID);
                        
                        foreach (var image in images)
                        {
                            imageUrls.Add(image.URL);
                            imageThumbUrls.Add(image.URLThumb);

                            if (imageNumber == 0)
                            {
                                sb.Append("'image':'" + image.URLThumb + "',");
                            }
                            imageNumber++;
                        }
                    }
                    if(imageNumber == 0)
                        sb.Append("'image':'../../Content/themes/metro/assets/img/no_image.jpg',");

                    // Close out propertList after image thumb is added or not
                    sb.Append("'baths':'" + property.BathsFull + "'},");

                    homeCount++;  // On
                }
                ViewData[property.ListingID + "_url"] = imageUrls;
                ViewData[property.ListingID + "_thumb"] = imageThumbUrls;
            }
            var propertyList = sb.ToString();
            propertyList = propertyList.Substring(0, propertyList.Length - 1);
            ViewData["propertyList"] = propertyList;
         
            return View(homesList);
        }

        public ActionResult Cities() {
            var cities = db.StateCountyCities;
            return View(cities.ToList());
        }
        public ActionResult Counties()
        {
            var cities = db.StateCountyCities;
            return View(cities.ToList());
        }
        public ActionResult Images() {
            var media = db.Media;
            var properties = db.AllProperties;
            return View(media.ToList());
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
