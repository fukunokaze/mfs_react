'use client'

import Label from '@/components/Label';
import UnitOfMeasureModel from '@/models/unitofmeasure';
import React, { FormEvent } from 'react';
import { CreateUOM } from "@/services/unitofmeasureservice"
import UnitOfMeasure from '../page';

export default function UnitOfMeasurePage() {
   
    return (
       <UnitOfMeasure></UnitOfMeasure>
    );
}