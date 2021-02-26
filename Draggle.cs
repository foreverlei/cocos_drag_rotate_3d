using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;

public class Draggle : MonoBehaviour
{
    Vector3 StartPosition;
    Vector3 previousPosition;
    Vector3 offset;
    Vector3 finalOffset;
    Vector3 eulerAngle;

    //ArrayList pos = new ArrayList();
    List<Vector3> pos = new List<Vector3>();

    bool isSlide;
    float angle;

    void Start()
    {
    }

    void RotateModel()
    {
        if (Input.GetMouseButtonDown(1))
        {
            StartPosition = Input.mousePosition;
            previousPosition = Input.mousePosition;
            Debug.Log(StartPosition);
            pos.Clear();
        }
        if (Input.GetMouseButton(1))
        {
            offset = Input.mousePosition - previousPosition;
            Debug.Log(offset);
            previousPosition = Input.mousePosition;
            transform.Rotate(Vector3.Cross(offset, Vector3.forward).normalized, offset.magnitude, Space.World);
            pos.Add(previousPosition);
           

        }
//         if (Input.GetMouseButtonUp(1))
//         {
//             int last = 5;
//             if (pos.Count > last)
//             {
//                 StartPosition = pos[pos.Count - last];

//             }
//             finalOffset = Input.mousePosition - StartPosition;
//             isSlide = true;
//             angle = finalOffset.magnitude;


//         }
//         if (isSlide)
//         {
//             transform.Rotate(Vector3.Cross(finalOffset, Vector3.forward).normalized, angle * 2 * Time.deltaTime, Space.World);
//             if (angle > 0)
//             {
//                 angle -= 5;
//             }
//             else
//             {
//                 angle = 0;
//             }
//         }
    }


    void Update()
    {
        RotateModel();
    }

}
