using Nancy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SelfHosting.Nancy
{
    public class Bootstrapper:DefaultNancyBootstrapper
    {
        protected override IRootPathProvider RootPathProvider
        {
            get
            {
                return new SelfHostingRootPathProvider();
            }
        }
    }
}
