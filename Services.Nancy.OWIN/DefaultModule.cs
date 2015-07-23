using Nancy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Services.Nancy.OWIN
{
    public class DefaultModule:NancyModule
    {
        public DefaultModule()
        {
            Get["/"] = param => View["Index.html"];
        }
    }
}