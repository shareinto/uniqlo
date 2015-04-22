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
              name: "Simulation",
              url: "simulation.html",
              defaults: new { controller = "Home", action = "Simulation", id = UrlParameter.Optional }
              );
            routes.MapRoute(
              name: "SelItem",
              url: "sel_item.html",
              defaults: new { controller = "Home", action = "SelItem", id = UrlParameter.Optional }
              );
            routes.MapRoute(
              name: "Store",
              url: "store.html",
              defaults: new { controller = "Home", action = "Store", id = UrlParameter.Optional }
              );
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