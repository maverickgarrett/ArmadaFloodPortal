using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace ArmadaPortal.Flood
{
    public partial class DocumentEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ArmadaPortal.Flood.DocumentEditor";

        public DocumentEditorAttribute()
            : base(Key)
        {
        }
    }
}

