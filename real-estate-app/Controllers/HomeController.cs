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

        [HttpPost]
        public ActionResult Index(string Command, FormCollection formCollection)
        {
       //     var properties = db.Database.SqlQuery<PropertiesFromCity>("SELECT * FROM AllProperty Where CityName like 'POCONO LAKE'");
          //  System.Globalization.TextInfo ti = CultureInfo.CurrentCulture.TextInfo;


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
            
          
            /*
            foreach (string _formData in formCollection)
            {
                ViewData[_formData] = formCollection[_formData];
            }
            */
          
            List<GetAPStateCity_Result> homesList = new List<GetAPStateCity_Result>();
         //   List<GetImagesByListingID_Result> images = new List<GetImagesByListingID_Result>();
            var count = 0;
            int homeCount = 0;
            StringBuilder sb = new StringBuilder();

            int i = 1;
            foreach (var property in properties) {
                List<string> imageUrls = new List<string>();
                List<string> imageThumbUrls = new List<string>();
                
                if (homeCount < 50) // Only allow max 50 records
                {
                    homesList.Add(property);
                    // Build property list for map markers
                    sb.Append("{'acres':'" + property.LotAreaAcre + "',");
                    sb.Append("'price':'" + property.ListPrice + "',");
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
                            imageUrls.Add(image.URLThumb);
                            imageThumbUrls.Add(image.URL);

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
                ViewData[property.ListingID + "_thumb"] = imageUrls;
                ViewData[property.ListingID + "_url"] = imageThumbUrls;
            }
            var propertyList = sb.ToString();
            propertyList = propertyList.Substring(0, propertyList.Length - 1);
            ViewData["propertyList"] = propertyList;
         //   Response.Write(sb.ToString());
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

        [HttpPost]
        public ActionResult IndexPost() {
            // This handler will process all search queries from the application

            Response.Redirect("http://google.com");
            // some code to query the database and then retun home values from AllProperty

            return View();
        }

        //
        // NOT USED YET
        //
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
