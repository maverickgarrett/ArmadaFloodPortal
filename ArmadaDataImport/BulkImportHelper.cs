// =====================================================================
//  This file is part of the Microsoft Dynamics CRM SDK code samples.
//
//  Copyright (C) Microsoft Corporation.  All rights reserved.
//
//  This source code is intended only as a supplement to Microsoft
//  Development Tools and/or on-line documentation.  See these other
//  materials for detailed information regarding Microsoft code samples.
//
//  THIS CODE AND INFORMATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY
//  KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
//  IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
//  PARTICULAR PURPOSE.
// =====================================================================

//<snippetBulkImportHelper>
using System;
using System.IO;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Query;

namespace ArmadaDataImport
{    
    public static class BulkImportHelper
    {
        /// <summary>
        /// Reads data from the specified .csv file
        /// </summary>
        /// <param name="filePath"></param>
        /// <returns></returns>
        public static string ReadCsvFile(string filePath)
        {
            string data = string.Empty;
            using (StreamReader reader = new StreamReader(filePath))
            {
                string value = reader.ReadLine();
                while (value != null)
                {
                    data += value;
                    data += "\n";
                    value = reader.ReadLine();
                }
            }
            return data;
        }

        /// <summary>
        /// Reads data from the specified .xml file
        /// </summary>
        /// <param name="filePath"></param>
        /// <returns></returns>
        public static string ReadXmlFile(string filePath)
        {
            string data = string.Empty;
            using (StreamReader reader = new StreamReader(filePath))
            {
                data = reader.ReadToEnd();
            }
            return data;
        }
    }
}
//</snippetBulkImportHelper>