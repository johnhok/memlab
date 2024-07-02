/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @oncall web_perf_infra
 */
import BaseOperation from './BaseOperation';
import type { Page } from 'puppeteer';
export default class EscOperation extends BaseOperation {
    kind: string;
    constructor();
    act(page: Page): Promise<void>;
}
//# sourceMappingURL=EscOperation.d.ts.map