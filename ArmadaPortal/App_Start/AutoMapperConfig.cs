using System;
using System.Linq;
using AutoMapper;
using ArmadaPortal.Core.Models;


[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(ArmadaPortal.AutoMapperConfig), "SetupMappings")]
namespace ArmadaPortal
{
    public static class AutoMapperConfig
    {
        public static void SetupMappings()
        {
            AutoMapper.Mapper.Initialize(cfg => {
                //cfg.CreateMap<FloodOrder, EditOrderViewModel>();
                //cfg.CreateMap<FloodOrder, CreateOrderViewModel>();

                //cfg.CreateMap<EditOrderViewModel, FloodOrder>();
                //cfg.CreateMap<CreateOrderViewModel, FloodOrder>();

                //cfg.CreateMap<FloodOrder, FloodRiskOrder>();
                //cfg.CreateMap<FloodRiskOrder, FloodOrder>();

            });
        }
    }
}