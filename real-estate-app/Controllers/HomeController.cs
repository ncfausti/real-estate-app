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

        public ActionResult Index()
        {
            ViewBag.Message = "Modify this template to jump-start your ASP.NET MVC application.";
            return View();
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

        public ActionResult Cities() {
            var cities = db.StateCountyCities;
            return View(cities.ToList());
        }
    }
}
