using Nancy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SelfHosting.Nancy
{
    public class HomeModule:NancyModule
    {
        public HomeModule()
        {
            Get["/"] = param => View["Index", new {Now = DateTime.Now}];
        }
    }
}
