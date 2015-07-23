using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SelfHosting.Nancy.OWIN
{
    public class Startup
    {
        public void Configuration(IAppBuilder builder)
        {
            builder.UseNancy();
        }
    }
}