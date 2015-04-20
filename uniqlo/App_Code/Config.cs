using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace uniqlo
{
    public static class Config
    {
        public static string RES_HOST = ConfigurationManager.AppSettings["res"];
    }
}