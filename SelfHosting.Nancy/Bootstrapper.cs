using Nancy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SelfHosting.Nancy
{
    public class Bootstrapper : DefaultNancyBootstrapper
    {
        protected override global::Nancy.Diagnostics.DiagnosticsConfiguration DiagnosticsConfiguration
        {
            get
            {
                var v = base.DiagnosticsConfiguration;
                v.Password = "tets";
                return v;
            }
        }

        protected override void ApplicationStartup(global::Nancy.TinyIoc.TinyIoCContainer container, global::Nancy.Bootstrapper.IPipelines pipelines)
        {
            //base.ApplicationStartup(container, pipelines);
            StaticConfiguration.EnableRequestTracing = true;

        }

        protected override IRootPathProvider RootPathProvider
        {
            get
            {
                return new SelfHostingRootPathProvider();
            }
        }
    }
}
