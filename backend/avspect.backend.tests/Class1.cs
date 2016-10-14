using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;
using avspect.backend.Controllers;

namespace avspect.backend.tests
{
    public class AircraftTypesControllerTests
    {
        [Fact]
        public void CanGet()
        {
            var controller = new AircraftTypesController();
            var types = controller.Get();
            Assert.NotNull(types);
            Assert.Equal(1, types.Count());
        }
    }
}
