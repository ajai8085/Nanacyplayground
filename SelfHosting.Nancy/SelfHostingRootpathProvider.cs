using Nancy;
using Nancy.Hosting.Self;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SelfHosting.Nancy
{
    //Not used , use this class if you wish to avoid copy to output for views and content folders 
    public class SelfHostingRootPathProvider : IRootPathProvider
    {
        readonly IRootPathProvider _rootPathProvider;
        public SelfHostingRootPathProvider()
        {
            _rootPathProvider = new FileSystemRootPathProvider();
        }
        public string GetRootPath()
        {
            return Path.GetFullPath(Path.Combine(_rootPathProvider.GetRootPath(), "..", ".."));
        }
    }
}
