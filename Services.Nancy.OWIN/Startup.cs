using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Services.Nancy.OWIN
{
    public class Startup
    {
        public void Configuration(IAppBuilder appBuilder)
        {
            appBuilder.UseNancy();
        }
    }
}