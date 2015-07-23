using Microsoft.Owin.Extensions;
using Owin;



namespace Services.Nancy.OWIN
{
    public class Startup
    {
        public void Configuration(IAppBuilder appBuilder)
        {
            appBuilder.UseNancy();
            appBuilder.UseStageMarker(PipelineStage.MapHandler);
        }
    }
}