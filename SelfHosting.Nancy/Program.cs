using Nancy.Hosting.Self;
using System;
using System.Diagnostics;

namespace SelfHosting.Nancy
{
    class Program
    {
        static void Main(string[] args)
        {
            string url =@"http://localhost:12345";
            using (var host = new NancyHost(new Uri(url)))
            {
                host.Start();

                Process.Start(@"chrome.exe", string.Format("--incognito {0}", url));
                Console.WriteLine("press any key to stop");
                Console.ReadLine();
                host.Stop();
            }
            
        }

        private static void OpenUrl(string askedServer, int port)
        {
            var url = string.Format(@"http://{0}:{1}", askedServer, port);
            
        }
    }
}
