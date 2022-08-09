## http client unit testing

```
let httpMock: HttpTestingController;
let httpClient: HttpClient;

const mockHttp = (url, response): TestRequest => {
  const httpRequest = httpMock.expectOne(url);
  expect(httpRequest.request.method).toBe('POST');
  httpRequest.flush(response);
  httpMock.verify();
  return httpRequest;
};

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [SharedModule, HttpClientTestingModule],
    providers: [your-service]
  });

  httpClient = TestBed.inject(HttpClient);
  httpMock = TestBed.inject(HttpTestingController);
});

it('', () => {
  your-service.your-method().subscribe(() => {
    expect()
  })
  mock(apiUrl, mockresponse);
})
```

## ngOnDestroy unit testing

```
it('should unsubscribe all active subscriptions', () => {
  const mockSubscription = new Subscription();
  const unsubscribeSpy = spyOn(mockSubscription, 'unsubscribe');
  const mock = jest.fn();
  mock.mockReturnValueOnce({
    subscribe: jest.fn().mockReturnValueOnce(mockSubscription)
  });
  your-service.your-method = mock;
  your-component.ngOnInit();
  your-component.ngOnDestroy();
  expect(unsubscribeSpy).toBeCalled();
});
```

## splitting array to subarray and sort

```
/**
 * split the records array to sub arrays based on splancode
 * the resultant array is a collection of subarrays
 */
let tempArr = [];
const groupedArrays = records.reduce((acc, obj, i) => {
  if (i && records[i - 1].splanCode === obj.splanCode) {
	tempArr[tempArr.length] = obj;
  } else {
	acc.push((tempArr = [obj]));
  }
  return acc;
}, []);

/**
 * Now sort the subarrays as per below order:
 * D: Data
 * V: Voice
 * M: Messaging
 */
const order = ['D', 'V', 'M'];
this.aggregateUsageData = groupedArrays.map((subarr) => {
  return subarr.sort((firstRecord, secondRecord) => {
	return order.indexOf(firstRecord.usageTypeIndicator) - order.indexOf(secondRecord.usageTypeIndicator);
  });
});
```

## import stylesheet without relative path in angular

```
angular.json => projects => architect => build => options
"stylePreprocessorOptions": {
  "includePaths": ["src/styles"]
}
```
