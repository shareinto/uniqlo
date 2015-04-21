using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace uniqlo.utility
{
    public static class Config
    {
        public static string RES_HOST = ConfigurationManager.AppSettings["res"];
    }
}
