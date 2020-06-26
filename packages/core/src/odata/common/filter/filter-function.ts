/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */

import { EdmTypeShared } from '../edm-types';
import { EntityBase, ODataVersionOf } from '../entity';
import { Field, FieldType } from '../selectable';
import { Filter } from './filter';

/**
 * Data structure to represent OData V2 filter functions.
 * Use the factory function [[filterFunction]] to create instances of `FilterFunction`.
 */
export abstract class FilterFunction<
  EntityT extends EntityBase,
  ReturnT extends FieldType
> {
  /**
   * EdmType of the return type of the filter function.
   */
  public edmType: EdmTypeShared<ODataVersionOf<EntityT>>;

  /**
   * Creates an instance of FilterFunction.
   * @param functionName - Name of the function
   * @param parameters - Representation of the parameters passed to the filter function
   */
  constructor(
    public functionName: string,
    public parameters: FilterFunctionParameterType<EntityT>[]
  ) {}

  /**
   * @deprecated Since v1.21.0. There will be no replacement. Let us know if you were using this functionality.
   * Serializes the filter function into a string
   * @param parentFieldNames - Names of parents in case the function is part of a filter on a navigation property
   * @returns The filter function as string
   */
  toString(parentFieldNames: string[] = []): string {
    const params = this.parameters
      .map(param => this.transformParameter(param, parentFieldNames))
      .join(', ');
    return `${this.functionName}(${params})`;
  }

  /**
   * Creates an instance of Filter for this filter function and the given value using the operator 'eq', i.e. `==`.
   *
   * @param value - Value to be used in the filter
   * @param edmType - EdmType of the value, used when converting the value to URL. Use `Edm.String` as default value.
   * @returns The resulting filter
   */
  equals(value: ReturnT): Filter<EntityT, ReturnT> {
    return new Filter(this, 'eq', value, this.edmType);
  }

  /**
   * Creates an instance of Filter for this filter function and the given value using the operator 'ne', i.e. `!=`.
   *
   * @param value - Value to be used in the filter
   * @param edmType - EdmType of the value, used when converting the value to URL. Use `Edm.String` as default value.
   * @returns The resulting filter
   */
  notEquals(value: ReturnT): Filter<EntityT, ReturnT> {
    return new Filter(this, 'ne', value, this.edmType);
  }

  /**
   * @deprecated Since v1.21.0. There will be no replacement. Let us know if you were using this functionality.
   * For different type of filter function parameters, build a function that generates a string as url pattern.
   * @param param - One parameter of the filter function
   * @param parentFieldNames - The parent field name list used when the field with navigation properties are involved
   * @returns A function that convert the parameter to url pattern.
   */
  private transformParameter(
    param: FilterFunctionParameterType<EntityT>,
    parentFieldNames: string[]
  ): string {
    if (typeof param === 'number') {
      return param.toString();
    }
    if (typeof param === 'string') {
      return `'${param.replace(/'/g, "''")}'`;
    }
    if (param instanceof FilterFunction) {
      return param.toString(parentFieldNames);
    }
    return [...parentFieldNames, param._fieldName].join('/');
  }
}

/**
 * Type of a parameter of a filter function. This can either be an explicit value (string or number), a reference to a field or another filter function.
 */
export type FilterFunctionParameterType<EntityT extends EntityBase> =
  | number
  | string
  | Field<EntityT>
  | FilterFunction<EntityT, FieldType>;