using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace uniqlo
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
              name: "Select",
              url: "select.html",
              defaults: new { controller = "Home", action = "Select", id = UrlParameter.Optional }
              );
            routes.MapRoute(
               name: "Top",
               url: "index.html",
               defaults: new { controller = "Home", action = "Top", id = UrlParameter.Optional }
               );
            routes.MapRoute(
              name: "Start",
              url: "start.html",
              defaults: new { controller = "Home", action = "Start", id = UrlParameter.Optional }
              );
            routes.MapRoute(
               name: "Default",
               url: "{controller}/{action}/{id}",
               defaults: new { controller = "Home", action = "Top", id = UrlParameter.Optional }
           );
           
           
        }
    }
}