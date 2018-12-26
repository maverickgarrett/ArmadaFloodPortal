using ArmadaPortal.Core.Models;
using System;

namespace ArmadaPortal.Core.Converters
{
    public class FloodOrderConverter : IConverter<FloodOrder, FloodRiskOrder >
    {
        public FloodOrder Convert(FloodRiskOrder floodRiskOrder)
        {
            return new FloodOrder(floodRiskOrder);
        }
    }
}