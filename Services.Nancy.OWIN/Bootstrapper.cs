using Nancy;
using System;
using System.Collections.Generic;
using System.Linq;
using Nancy.Conventions;
using System.Web;

namespace Services.Nancy.OWIN
{
    public class Bootstrapper : DefaultNancyBootstrapper
    {
        protected override global::Nancy.Diagnostics.DiagnosticsConfiguration DiagnosticsConfiguration
        {
            get
            {
                var v = base.DiagnosticsConfiguration;
                v.Password = "Te5t123";
                return v;
            }
        }

        protected override void ApplicationStartup(global::Nancy.TinyIoc.TinyIoCContainer container, global::Nancy.Bootstrapper.IPipelines pipelines)
        {
            base.ApplicationStartup(container, pipelines);

            StaticConfiguration.EnableRequestTracing = true;
        }
        protected override void ConfigureConventions(global::Nancy.Conventions.NancyConventions nancyConventions)
        {
            base.ConfigureConventions(nancyConventions);

            //nancyConventions.StaticContentsConventions.Add(StaticContentConventionBuilder.AddDirectory("content"));
           
            //nancyConventions.StaticContentsConventions.Add(StaticContentConventionBuilder.AddDirectory("scripts"));
            //nancyConventions.StaticContentsConventions.Add(StaticContentConventionBuilder.AddDirectory("fonts"));
        }
    }
}