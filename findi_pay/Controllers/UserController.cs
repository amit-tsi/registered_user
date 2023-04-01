using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace findi_pay.Controllers
{
    public class UserController : Controller
    {
        // GET: User
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult SendMoney() { 
            return View();
        }
        public ActionResult Refund()
        {
            return View();
        }
        public ActionResult Reports()
        {
            return View();
        }
    }
}