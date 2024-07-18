provider "azurerm" {
  features {}
}

variable "storage_account_name" {
  description = "Name of the storage account"
  type        = string
}

variable "location" {
  description = "Azure region to deploy the storage account"
  type        = string
  default     = "East US"
}

resource "azurerm_resource_group" "rg" {
  name     = "example-resources"
  location = var.location
}

resource "azurerm_storage_account" "sa" {
  name                     = var.storage_account_name
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

output "primary_access_key" {
  value = azurerm_storage_account.sa.primary_access_key
}