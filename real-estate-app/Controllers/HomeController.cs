using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using real_estate_app.Models;

namespace real_estate_app.Controllers
{
    public class HomeController : Controller
    {
        private MLSEntities db = new MLSEntities();
        public ActionResult Index(string Command)
        {   
            var homeList = new List<string>();
            var properties = db.AllProperties;

            return View(properties.ToList());
        }

        [HttpPost]
        public ActionResult Index(string Command, FormCollection formCollection)
        {
            var homeList = new List<string>();
            var properties = db.AllProperties;
            foreach (string _formData in formCollection)
            {
                ViewData[_formData] = formCollection[_formData];
            }
            ViewBag.City = Request["cities-select-to"];

            return View(properties.ToList());
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
