using System;
using System.Collections.Generic;
using System.Data.Objects;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using real_estate_app.Models;
using System.Data.SqlClient;

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
            foreach (var property in properties) {
                homesList.Add(property);
                List<string> imageUrls = new List<string>();
                List<string> imageThumbUrls = new List<string>();
                
                count += 1;
                if (count < 5)  // Only load images for first five properties
                {
                    ObjectResult<GetImagesByListingID_Result> images = db.GetImagesByListingID(property.ListingID);
                    
                    foreach (var image in images)
                    {
                        
                        imageUrls.Add(image.URLThumb);
                        imageThumbUrls.Add(image.URL);
                    }
                }
                ViewData[property.ListingID + "_thumb"] = imageUrls;
                ViewData[property.ListingID + "_url"] = imageThumbUrls;
            }
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
