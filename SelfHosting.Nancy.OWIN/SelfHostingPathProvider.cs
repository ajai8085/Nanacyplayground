using Nancy;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace SelfHosting.Nancy.OWIN
{
    class SelfHostingPathProvider : IRootPathProvider
    {
        //readonly IRootPathProvider _rootPathProvider;
        public SelfHostingPathProvider()
        {
            // _rootPathProvider = new FileSystemRootPathProvider();
        }
        public string GetRootPath()
        {
            var asm = Assembly.GetEntryAssembly() ?? Assembly.GetExecutingAssembly();

            var rootPath = Path.GetDirectoryName(asm.Location) ?? Environment.CurrentDirectory;

            return Path.GetFullPath(Path.Combine(rootPath, "..", ".."));
        }
    }
}
